# def translate sentence
#   def translate_one_word word
#     vowels = ["a", "e", "i", "o", "u"]
#     first_letter = word[0]
#     if vowels.include?(first_letter)
#       return word + "ay"
#     else
#       word = word.slice(1..-1)
#       second_letter = word[0]
#       if vowels.include?(second_letter)
#         return word + first_letter + "ay"
#       else
#         word = word.slice(1..-1)
#         return word + first_letter + second_letter + "ay"
#       end
#     end
#   end

#   sentence = sentence.split(" ")
#   translated_sentence = []
#   sentence.each do |word|
#     translated_sentence.push(translate_one_word(word))
#   end

#   return translated_sentence.join(" ")
# end

def translate sentence
  def translate_one_word word, append_letters=""
    vowels = ["a", "e", "i", "o", "u"]
    first_letter = word[0]
    if first_letter == "q"
      append_letters += word.slice(0, 2)
      first_letter = word[2]
      word = word.slice(2..-1)
    end
    if vowels.include?(first_letter)
      return word + append_letters + "ay"
    else
      second_letter = word[0]
      append_letters += second_letter
      word = word.slice(1..-1)
      return translate_one_word(word, append_letters)
    end
  end

  sentence = sentence.split(" ")
  translated_sentence = []
  sentence.each do |word|
    translated_sentence.push(translate_one_word(word))
  end

  return translated_sentence.join(" ")
end















