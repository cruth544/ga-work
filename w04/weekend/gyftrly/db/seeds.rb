# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

gifts = Gift.create([
  {title: "Google",
    recipient: "Friend",
    image_url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    description: "Google",
    is_purchased: true,
    price: 10000.00
    },
  {title: "Facebook",
    recipient: "Friend",
    image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRp4qIVM-GfcOschf5JBbeM5wVPORQaynGscyydo0I1nvzpykNlLsV_kXk",
    description: "Facebook",
    is_purchased: false,
    price: 48294.84
    },
  {title: "Apple",
    recipient: "Friend",
    image_url: "http://logok.org/wp-content/uploads/2014/04/Apple-logo-grey-880x625.png",
    description: "Apple",
    is_purchased: true,
    price: 5
    },
  {title: "Microsoft",
    recipient: "Friend",
    image_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZRTKOhH6eLyvIamutQ3fNA17bQ0TSIf9_ZNlU19hB3exz8cTQoi3X5ns",
    description: "Microsoft",
    is_purchased: false,
    price: 124952.93,
    },
  {title: "Tesla",
    recipient: "Friend",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZNEjTIAkQmXjMq533JpdADc9zMR1Ns8y7yGhTwnHZgO9pTAKHK_OJVI",
    description: "Tesla",
    is_purchased: "true",
    price: 2948392
    }
])
