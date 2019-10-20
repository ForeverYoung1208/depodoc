require "application_system_test_case"

class OptypesTest < ApplicationSystemTestCase
  setup do
    @optype = optypes(:one)
  end

  test "visiting the index" do
    visit optypes_url
    assert_selector "h1", text: "Optypes"
  end

  test "creating a Optype" do
    visit optypes_url
    click_on "New Optype"

    fill_in "Name", with: @optype.name
    click_on "Create Optype"

    assert_text "Optype was successfully created"
    click_on "Back"
  end

  test "updating a Optype" do
    visit optypes_url
    click_on "Edit", match: :first

    fill_in "Name", with: @optype.name
    click_on "Update Optype"

    assert_text "Optype was successfully updated"
    click_on "Back"
  end

  test "destroying a Optype" do
    visit optypes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Optype was successfully destroyed"
  end
end
