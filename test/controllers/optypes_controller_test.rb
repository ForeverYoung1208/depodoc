require 'test_helper'

class OptypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @optype = optypes(:one)
  end

  test "should get index" do
    get optypes_url
    assert_response :success
  end

  test "should get new" do
    get new_optype_url
    assert_response :success
  end

  test "should create optype" do
    assert_difference('Optype.count') do
      post optypes_url, params: { optype: { name: @optype.name } }
    end

    assert_redirected_to optype_url(Optype.last)
  end

  test "should show optype" do
    get optype_url(@optype)
    assert_response :success
  end

  test "should get edit" do
    get edit_optype_url(@optype)
    assert_response :success
  end

  test "should update optype" do
    patch optype_url(@optype), params: { optype: { name: @optype.name } }
    assert_redirected_to optype_url(@optype)
  end

  test "should destroy optype" do
    assert_difference('Optype.count', -1) do
      delete optype_url(@optype)
    end

    assert_redirected_to optypes_url
  end
end
