class Game_Board
  attr_accessor :filled_cells
  def initialize
    self.filled_cells = [
      [Cell.new, Cell.new, Cell.new],
      [Cell.new, Cell.new, Cell.new],
      [Cell.new, Cell.new, Cell.new]
    ]
  end
  def print_board
    puts "\n\n
       A   B   C
    1) #{self.filled_cells[0][0].occupied} | #{self.filled_cells[0][1].occupied} | #{self.filled_cells[0][2].occupied}
      -----------
    2) #{self.filled_cells[1][0].occupied} | #{self.filled_cells[1][1].occupied} | #{self.filled_cells[1][2].occupied}
      -----------
    3) #{self.filled_cells[2][0].occupied} | #{self.filled_cells[2][1].occupied} | #{self.filled_cells[2][2].occupied}
    \n\n\n"

  end

  def moves_taken
    moves_taken = 0

    for column in self.filled_cells
      for cell in column
        if cell.is_occupied?
          moves_taken += 1
        end
      end
    end

    moves_taken
  end

  def fill_cell col, row
    if moves_taken % 2 == 0
      player = "X"
    else
      player = "O"
    end

    self.filled_cells[row][col].occupied = player
    print_board
  end

  def check_win
    return false if moves_taken < 5
    cells = self.filled_cells
    if cells[1][1].is_occupied?
      player = cells[1][1].occupied
      if cells[0][0].occupied == player and cells[2][2].occupied == player
        return true
      elsif cells[0][2].occupied == player and cells[2][0].occupied
        return true
      end
    end

  end

end

class Input
  @@rows = ["A", "B", "C"]
  @@input = ""

  def self.get_input board
    loop do
      @@input = gets.chomp
      break if self.is_valid? @@input
      puts "Not a valid square"
    end
    self.fill_board board, @@input
  end

  private

  def self.fill_board board, input
    col = input[0].upcase
    col = @@rows.index(col)
    row = input[1].to_i - 1
    board.fill_cell col, row
  end

  def self.is_valid? input
    return false if input.length > 2
    if @@rows.include? input[0].upcase
      if input[1].to_i > 0 and input[1].to_i < 4
        return true
      end
    end
  end

end

class Cell
  attr_accessor :occupied
  def initialize
    self.occupied = " "
  end

  def is_occupied?
    if self.occupied == " "
      return false
    else
      return true
    end
  end

end














































