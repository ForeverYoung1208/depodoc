require "application_system_test_case"

class DocstatesTest < ApplicationSystemTestCase
  setup do
    @docstate = docstates(:one)
  end

  test "visiting the index" do
    visit docstates_url
    assert_selector "h1", text: "Docstates"
  end

  test "creating a Docstate" do
    visit docstates_url
    click_on "New Docstate"

    fill_in "Name", with: @docstate.name
    fill_in "Possible changes", with: @docstate.possible_changes
    click_on "Create Docstate"

    assert_text "Docstate was successfully created"
    click_on "Back"
  end

  test "updating a Docstate" do
    visit docstates_url
    click_on "Edit", match: :first

    fill_in "Name", with: @docstate.name
    fill_in "Possible changes", with: @docstate.possible_changes
    click_on "Update Docstate"

    assert_text "Docstate was successfully updated"
    click_on "Back"
  end

  test "destroying a Docstate" do
    visit docstates_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Docstate was successfully destroyed"
  end
end
