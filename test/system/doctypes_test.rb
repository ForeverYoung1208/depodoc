require "application_system_test_case"

class DoctypesTest < ApplicationSystemTestCase
  setup do
    @doctype = doctypes(:one)
  end

  test "visiting the index" do
    visit doctypes_url
    assert_selector "h1", text: "Doctypes"
  end

  test "creating a Doctype" do
    visit doctypes_url
    click_on "New Doctype"

    fill_in "Name", with: @doctype.name
    click_on "Create Doctype"

    assert_text "Doctype was successfully created"
    click_on "Back"
  end

  test "updating a Doctype" do
    visit doctypes_url
    click_on "Edit", match: :first

    fill_in "Name", with: @doctype.name
    click_on "Update Doctype"

    assert_text "Doctype was successfully updated"
    click_on "Back"
  end

  test "destroying a Doctype" do
    visit doctypes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Doctype was successfully destroyed"
  end
end
