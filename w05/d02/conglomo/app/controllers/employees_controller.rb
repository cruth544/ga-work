class EmployeesController < ApplicationController
  attr_accessor :employees, :employee
  @@prior_list ||= Employee.all

  def employees
    @employees = Employee.order("name")
  end

  def index
    puts "HERE'S THE LIST"
    puts "ldsafjadsl;k ads;lksdafsadf
    asdf
    separate_by_departmentsada
    dssaf
  d"
    puts @@prior_list
    @employees
  end

  def show
    self.employee = Employee.find(params[:id])
  end

  def department
    @@prior_list = @employees
    self.employees = separate_by_department(params[:format].to_i)
    # ghkj
    render :index
  end

  def sort
    self.employees = Employee.order(params[:sort_by])
    if @employees == @@prior_list
      self.employees = Employee.order(params[:sort_by] + " desc")
    end
    # if @@prior_list.length < @employees.length
    #   list = separate_by_department(@@prior_list.first[:department_id])
    #   self.employees = list
    # end
    @@prior_list = @employees
    render :index
  end

  private

  def separate_by_department department_number
    employees_by_department = []
    self.employees.each do |employee|
      if employee[:department_id] == department_number
        employees_by_department << employee
      end
    end
    employees_by_department
  end

end
