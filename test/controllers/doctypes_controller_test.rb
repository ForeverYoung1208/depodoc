require 'test_helper'

class DoctypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @doctype = doctypes(:one)
  end

  test "should get index" do
    get doctypes_url
    assert_response :success
  end

  test "should get new" do
    get new_doctype_url
    assert_response :success
  end

  test "should create doctype" do
    assert_difference('Doctype.count') do
      post doctypes_url, params: { doctype: { name: @doctype.name } }
    end

    assert_redirected_to doctype_url(Doctype.last)
  end

  test "should show doctype" do
    get doctype_url(@doctype)
    assert_response :success
  end

  test "should get edit" do
    get edit_doctype_url(@doctype)
    assert_response :success
  end

  test "should update doctype" do
    patch doctype_url(@doctype), params: { doctype: { name: @doctype.name } }
    assert_redirected_to doctype_url(@doctype)
  end

  test "should destroy doctype" do
    assert_difference('Doctype.count', -1) do
      delete doctype_url(@doctype)
    end

    assert_redirected_to doctypes_url
  end
end
