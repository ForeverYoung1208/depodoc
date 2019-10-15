require 'test_helper'

class DocstatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @docstate = docstates(:one)
  end

  test "should get index" do
    get docstates_url
    assert_response :success
  end

  test "should get new" do
    get new_docstate_url
    assert_response :success
  end

  test "should create docstate" do
    assert_difference('Docstate.count') do
      post docstates_url, params: { docstate: { name: @docstate.name, possible_changes: @docstate.possible_changes } }
    end

    assert_redirected_to docstate_url(Docstate.last)
  end

  test "should show docstate" do
    get docstate_url(@docstate)
    assert_response :success
  end

  test "should get edit" do
    get edit_docstate_url(@docstate)
    assert_response :success
  end

  test "should update docstate" do
    patch docstate_url(@docstate), params: { docstate: { name: @docstate.name, possible_changes: @docstate.possible_changes } }
    assert_redirected_to docstate_url(@docstate)
  end

  test "should destroy docstate" do
    assert_difference('Docstate.count', -1) do
      delete docstate_url(@docstate)
    end

    assert_redirected_to docstates_url
  end
end
