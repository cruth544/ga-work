require 'test_helper'

class EmployeesControllerTest < ActionController::TestCase
  test "should get name" do
    get :name
    assert_response :success
  end

  test "should get age:integer" do
    get :age:integer
    assert_response :success
  end

  test "should get address" do
    get :address
    assert_response :success
  end

  test "should get salary:integer" do
    get :salary:integer
    assert_response :success
  end

  test "should get department_id:integer" do
    get :department_id:integer
    assert_response :success
  end

end
