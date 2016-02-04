# scraper.rb
require 'nokogiri'
require 'open-uri'
require 'awesome_print'

# filter links
def filter_links(results)
  dogs = []

  # regex for words matching "pup", "puppy", "puppies", or "dog"
  dog_regex = /pup|puppy|puppies|dog/
  ## YOUR CODE HERE

  # regex for words matching "house", "item", "boots", "walker", or "sitter"
  item_regex = /house|item|boots|walker/
    ## YOUR CODE HERE practicing vim

  # filter results that match `dog_regex` and DO NOT match `item_regex`
  # Hint: you'll want to iterate through `results` and push each result
  # into `dogs` array if it meets the regex requirements
  ## YOUR CODE HERE
  results.each do |result|
    puts result
    if dog_regex.match(result[:title]) and !item_regex.match(result[:title]) and /pic/.match(result[:pic])
        dogs << result
    end
  end
  # return dogs array
  dogs
end

# get today's results
def get_todays_results(results, date_str)
  todays_results = []

  # iterate through each result and push it into `todays_results`
  # if date matches `date_str`
  results.each do |result|
    if result[:date] == date_str
      todays_results.push(result)
    end
  end

  # comment out below to see today's results before filter
  filter_links(todays_results)

  # comment in below to see today's results before filter
  # todays_results
end

# get all page results from craigslist
def get_page_results(date_str)
  url = "http://losangeles.craigslist.org/search/lac/pet"
  page = Nokogiri::HTML(open(url))

  # map page elements to a hash with date, title, location
  all_rows = page.css(".row .txt").map do |row| {
    date: row.css(".pl time").text,
    title: row.css(".pl a").text,
    location: row.css(".l2 .pnr small").text,
    pic: row.css("span .p").text
  }
  end

  get_todays_results(all_rows, date_str)
end

# search function
def search(date_str)
  get_page_results(date_str)
end

# learn more about time in ruby:
# http://www.ruby-doc.org/stdlib-1.9.3/libdoc/date/rdoc/Date.html#strftime-method
today = Time.now.strftime("%b %-d")

# call search function with today's date
ap search(today)
