require 'test_helper'

class OpstateChangesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @opstate_change = opstate_changes(:one)
  end

  test "should get index" do
    get opstate_changes_url
    assert_response :success
  end

  test "should get new" do
    get new_opstate_change_url
    assert_response :success
  end

  test "should create opstate_change" do
    assert_difference('OpstateChange.count') do
      post opstate_changes_url, params: { opstate_change: { date: @opstate_change.date, deleted_at: @opstate_change.deleted_at, from_state_id: @opstate_change.from_state_id, note: @opstate_change.note, operation_id: @opstate_change.operation_id, to_state_id: @opstate_change.to_state_id, user_references: @opstate_change.user_references } }
    end

    assert_redirected_to opstate_change_url(OpstateChange.last)
  end

  test "should show opstate_change" do
    get opstate_change_url(@opstate_change)
    assert_response :success
  end

  test "should get edit" do
    get edit_opstate_change_url(@opstate_change)
    assert_response :success
  end

  test "should update opstate_change" do
    patch opstate_change_url(@opstate_change), params: { opstate_change: { date: @opstate_change.date, deleted_at: @opstate_change.deleted_at, from_state_id: @opstate_change.from_state_id, note: @opstate_change.note, operation_id: @opstate_change.operation_id, to_state_id: @opstate_change.to_state_id, user_references: @opstate_change.user_references } }
    assert_redirected_to opstate_change_url(@opstate_change)
  end

  test "should destroy opstate_change" do
    assert_difference('OpstateChange.count', -1) do
      delete opstate_change_url(@opstate_change)
    end

    assert_redirected_to opstate_changes_url
  end
end
