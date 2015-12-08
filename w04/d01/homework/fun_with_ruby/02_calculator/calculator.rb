def add a, b
  return a + b
end

def subtract a, b
  return a - b
end

def sum array
  total = 0
  array.each do |num|
    total += num
  end
  return total
end

def multiply *array
  product = 1
  array.each do |num|
    product *= num
  end
  return product
end

def power a, b
  return a ** b
end

def factoral num
  if num == 0
    return 1
  end

  product = 1
  for n in num.downto(1)
    product *= n
  end
  return product
end
