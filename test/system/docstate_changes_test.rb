require "application_system_test_case"

class DocstateChangesTest < ApplicationSystemTestCase
  setup do
    @docstate_change = docstate_changes(:one)
  end

  test "visiting the index" do
    visit docstate_changes_url
    assert_selector "h1", text: "Docstate Changes"
  end

  test "creating a Docstate change" do
    visit docstate_changes_url
    click_on "New Docstate Change"

    fill_in "Document", with: @docstate_change.document_id
    fill_in "From state", with: @docstate_change.from_state_id
    fill_in "Note", with: @docstate_change.note
    fill_in "To state", with: @docstate_change.to_state_id
    fill_in "User references", with: @docstate_change.user_references
    click_on "Create Docstate change"

    assert_text "Docstate change was successfully created"
    click_on "Back"
  end

  test "updating a Docstate change" do
    visit docstate_changes_url
    click_on "Edit", match: :first

    fill_in "Document", with: @docstate_change.document_id
    fill_in "From state", with: @docstate_change.from_state_id
    fill_in "Note", with: @docstate_change.note
    fill_in "To state", with: @docstate_change.to_state_id
    fill_in "User references", with: @docstate_change.user_references
    click_on "Update Docstate change"

    assert_text "Docstate change was successfully updated"
    click_on "Back"
  end

  test "destroying a Docstate change" do
    visit docstate_changes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Docstate change was successfully destroyed"
  end
end
