require 'test_helper'

class OpstatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @opstate = opstates(:one)
  end

  test "should get index" do
    get opstates_url
    assert_response :success
  end

  test "should get new" do
    get new_opstate_url
    assert_response :success
  end

  test "should create opstate" do
    assert_difference('Opstate.count') do
      post opstates_url, params: { opstate: { name: @opstate.name, possible_changes: @opstate.possible_changes } }
    end

    assert_redirected_to opstate_url(Opstate.last)
  end

  test "should show opstate" do
    get opstate_url(@opstate)
    assert_response :success
  end

  test "should get edit" do
    get edit_opstate_url(@opstate)
    assert_response :success
  end

  test "should update opstate" do
    patch opstate_url(@opstate), params: { opstate: { name: @opstate.name, possible_changes: @opstate.possible_changes } }
    assert_redirected_to opstate_url(@opstate)
  end

  test "should destroy opstate" do
    assert_difference('Opstate.count', -1) do
      delete opstate_url(@opstate)
    end

    assert_redirected_to opstates_url
  end
end
