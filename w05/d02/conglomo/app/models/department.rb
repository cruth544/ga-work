class Department < ActiveRecord::Base
  has_many :employees

  def self.list
    ["Engineering", "Accounting", "Legal", "HR", "Sales"].sort!
  end
end
