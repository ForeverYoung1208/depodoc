require 'test_helper'

class FacesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @face = faces(:one)
  end

  test "should get index" do
    get faces_url
    assert_response :success
  end

  test "should get new" do
    get new_face_url
    assert_response :success
  end

  test "should create face" do
    assert_difference('Face.count') do
      post faces_url, params: { face: { code: @face.code, is_fiz: @face.is_fiz, is_resident: @face.is_resident, name: @face.name, note: @face.note } }
    end

    assert_redirected_to face_url(Face.last)
  end

  test "should show face" do
    get face_url(@face)
    assert_response :success
  end

  test "should get edit" do
    get edit_face_url(@face)
    assert_response :success
  end

  test "should update face" do
    patch face_url(@face), params: { face: { code: @face.code, is_fiz: @face.is_fiz, is_resident: @face.is_resident, name: @face.name, note: @face.note } }
    assert_redirected_to face_url(@face)
  end

  test "should destroy face" do
    assert_difference('Face.count', -1) do
      delete face_url(@face)
    end

    assert_redirected_to faces_url
  end
end
