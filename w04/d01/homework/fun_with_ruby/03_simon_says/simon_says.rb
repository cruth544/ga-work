def echo str
  return str
end

def shout str
  return str.upcase
end

def repeat str, times=2
  repeat_array = []
  for word in 1..times
    repeat_array.push(str)
  end

  repeat_string = repeat_array.join(" ")
  return repeat_string
end

def start_of_word word, index
  return word[0, index]
end

def first_word sentence
  tmp_array = sentence.split(" ")

  return tmp_array[0]
end

def titleize sentence
  little_words = ["and", "the", "a", "to", "with", "over"]
  sentence = sentence.split(" ")
  sentence[0].capitalize!
  for word in sentence
    next if little_words.include?(word)
    word.capitalize!
  end

  return sentence.join(" ")
end
