require "application_system_test_case"

class OpstatesTest < ApplicationSystemTestCase
  setup do
    @opstate = opstates(:one)
  end

  test "visiting the index" do
    visit opstates_url
    assert_selector "h1", text: "Opstates"
  end

  test "creating a Opstate" do
    visit opstates_url
    click_on "New Opstate"

    fill_in "Name", with: @opstate.name
    fill_in "Possible changes", with: @opstate.possible_changes
    click_on "Create Opstate"

    assert_text "Opstate was successfully created"
    click_on "Back"
  end

  test "updating a Opstate" do
    visit opstates_url
    click_on "Edit", match: :first

    fill_in "Name", with: @opstate.name
    fill_in "Possible changes", with: @opstate.possible_changes
    click_on "Update Opstate"

    assert_text "Opstate was successfully updated"
    click_on "Back"
  end

  test "destroying a Opstate" do
    visit opstates_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Opstate was successfully destroyed"
  end
end
