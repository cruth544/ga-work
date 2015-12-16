require 'test_helper'

class DepartmentsControllerTest < ActionController::TestCase
  test "should get name" do
    get :name
    assert_response :success
  end

end
