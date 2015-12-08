def add(x,y)
	return x + y
end

def subtract(x,y)
	x - y
end

def sum x
	sum = 0
	x.each do |v|
		sum += v
	end
	sum
end

def multiply(*numbers)
	mult = 1
	numbers.each do |number|
		mult *= number
	end
	mult
end

def power(x,y)
	x**y
end

def factoral(num)
	if num == 0 or num == 1
		1
	else
		sum = 1
		for i in (1..num)
			sum *= i
		end
		sum
	end
end


