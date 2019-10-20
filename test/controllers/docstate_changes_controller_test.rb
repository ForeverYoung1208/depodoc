require 'test_helper'

class DocstateChangesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @docstate_change = docstate_changes(:one)
  end

  test "should get index" do
    get docstate_changes_url
    assert_response :success
  end

  test "should get new" do
    get new_docstate_change_url
    assert_response :success
  end

  test "should create docstate_change" do
    assert_difference('DocstateChange.count') do
      post docstate_changes_url, params: { docstate_change: { document_id: @docstate_change.document_id, from_state_id: @docstate_change.from_state_id, note: @docstate_change.note, to_state_id: @docstate_change.to_state_id, user_references: @docstate_change.user_references } }
    end

    assert_redirected_to docstate_change_url(DocstateChange.last)
  end

  test "should show docstate_change" do
    get docstate_change_url(@docstate_change)
    assert_response :success
  end

  test "should get edit" do
    get edit_docstate_change_url(@docstate_change)
    assert_response :success
  end

  test "should update docstate_change" do
    patch docstate_change_url(@docstate_change), params: { docstate_change: { document_id: @docstate_change.document_id, from_state_id: @docstate_change.from_state_id, note: @docstate_change.note, to_state_id: @docstate_change.to_state_id, user_references: @docstate_change.user_references } }
    assert_redirected_to docstate_change_url(@docstate_change)
  end

  test "should destroy docstate_change" do
    assert_difference('DocstateChange.count', -1) do
      delete docstate_change_url(@docstate_change)
    end

    assert_redirected_to docstate_changes_url
  end
end
