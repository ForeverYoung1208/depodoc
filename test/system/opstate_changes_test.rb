require "application_system_test_case"

class OpstateChangesTest < ApplicationSystemTestCase
  setup do
    @opstate_change = opstate_changes(:one)
  end

  test "visiting the index" do
    visit opstate_changes_url
    assert_selector "h1", text: "Opstate Changes"
  end

  test "creating a Opstate change" do
    visit opstate_changes_url
    click_on "New Opstate Change"

    fill_in "Date", with: @opstate_change.date
    fill_in "Deleted at", with: @opstate_change.deleted_at
    fill_in "From state", with: @opstate_change.from_state_id
    fill_in "Note", with: @opstate_change.note
    fill_in "Operation", with: @opstate_change.operation_id
    fill_in "To state", with: @opstate_change.to_state_id
    fill_in "User references", with: @opstate_change.user_references
    click_on "Create Opstate change"

    assert_text "Opstate change was successfully created"
    click_on "Back"
  end

  test "updating a Opstate change" do
    visit opstate_changes_url
    click_on "Edit", match: :first

    fill_in "Date", with: @opstate_change.date
    fill_in "Deleted at", with: @opstate_change.deleted_at
    fill_in "From state", with: @opstate_change.from_state_id
    fill_in "Note", with: @opstate_change.note
    fill_in "Operation", with: @opstate_change.operation_id
    fill_in "To state", with: @opstate_change.to_state_id
    fill_in "User references", with: @opstate_change.user_references
    click_on "Update Opstate change"

    assert_text "Opstate change was successfully updated"
    click_on "Back"
  end

  test "destroying a Opstate change" do
    visit opstate_changes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Opstate change was successfully destroyed"
  end
end
