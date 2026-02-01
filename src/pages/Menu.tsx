export default function Menu() {
  return (
    <div className="pt-24 pb-20 px-6 bg-tavern-black text-tavern-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-mulligan-gold mb-4 tracking-wide">
          The Menu
        </h1>
        <p className="text-tavern-silver mb-12">
          Nothing goes into our food except for the finest ingredients!
        </p>

        <MenuSection
          title="The Front 9"
          subtitle="Appetizers – We are just getting you warmed up!"
          items={[
            { name: 'Chicken Tenders', desc: 'Hand breaded chicken strips in our seasoned breading. Plain or shaken the way you like. Served with your choice of dressing.', price: '$8' },
            { name: 'Chips and Salsa', desc: 'Served with fresh made salsa. Add white queso for $1.', price: '$4' },
            { name: 'Edamame', desc: 'Generous portion with garlic butter and tossed with Himalayan Salt.', price: '$6' },
            { name: 'Fried Mushrooms', desc: 'Served with RC\'s Sauce.', price: '$7' },
            { name: 'Fried Pickle Chips or Fried Jalapeños', desc: 'Hand breaded in our seasoned breading. Served with house ranch.', price: '$8' },
            { name: 'Jumbo Soft Dough Pretzels', desc: 'Served with house made queso. 1 Pretzel / 2 Pretzels', price: '$3 / $5' },
            { name: 'Loaded Tots or French Fries', desc: 'Topped with white queso, bacon, cheddar jack cheese and green onion.', price: '$6' },
            { name: "Mama's Meatballs", desc: 'Smothered in house marinara and topped with hand grated Parmesan.', price: '$8' },
            { name: 'Mozzarella Sticks', desc: 'Served with hand grated Parmesan, Italian seasonings and house marinara.', price: '$8' },
            { name: 'Nachos – "You Can\'t Get There"', desc: 'Fresh fried tortilla chips loaded with house queso, cheddar jack, jalapeños, tomatoes, black olives, black beans, cilantro. Served with salsa and sour cream. Add Chicken or Beef +$2, Shrimp +$3.', price: '$7' },
            { name: 'Onion Rings – "Get In The Hole"', desc: 'Hand breaded in our seasoned breading. Served with RC sauce.', price: '$7' },
            { name: 'Potato Skins – "Divots"', desc: 'Loaded with cheddar jack cheese, bacon bits and fresh green onions. Sour cream on the side.', price: '$7' },
            { name: 'Quesadilla', desc: 'Flour tortilla with melted cheddar-jack, onions and mushrooms. Served with salsa and sour cream. Add chicken or beef +$2, shrimp +$3.', price: '$8' },
            { name: 'Wings – "Dog Legs"', desc: 'Mild, Medium, Hot, Extra Hot, Carolina Reaper, Honey Hot, Teriyaki, BBQ, Garlic Parmesan, Lemon Pepper or Cajun Dry Rub. Mix and match. Served with carrots, celery and ranch or blue cheese.', price: '8/$11 · 10/$13 · 12/$15 · 20/$24 · 40/$44' },
            { name: 'Wing Basket', desc: 'Eight wings with any sauce and your choice of side.', price: '$13' },
          ]}
        />

        <MenuSection
          title='Salads – "The Rough"'
          subtitle='Dressings: Ranch, Blue Cheese, Thousand Island, Honey Mustard, Italian, Russian, Balsamic Vinaigrette, Caesar'
          items={[
            { name: 'Caesar', desc: 'Romaine, apple wood bacon, Parmesan, croutons in creamy Caesar. Add grilled chicken +$2, blackened shrimp +$3.', price: '$8' },
            { name: 'Chef Salad – "Scratch Player"', desc: 'Iceberg with ham, turkey, Swiss, cheddar jack, bacon, cucumbers, tomatoes, red onion, hard boiled egg. Choice of dressing.', price: '$10' },
            { name: 'House – "The Green"', desc: 'Iceberg with cucumbers, tomatoes, red onion, shredded carrots, cheddar-jack, garlic croutons. Add grilled or fried chicken +$2, shrimp +$3.', price: '$8' },
            { name: 'Taco Salad – "Chi Chi"', desc: 'Iceberg with tomatoes, red onion, black olives, black beans, cheddar jack, seasoned ground beef, cilantro. Served in Sante Fe bowl. Choice of dressing.', price: '$9' },
          ]}
        />

        <MenuSection
          title='Burgers, Sandwiches & Wraps – "Back 9"'
          subtitle='All come with fries, tater tots, cole slaw, or side salad. Wrap it up if you like.'
          items={[
            { name: 'Cordon Blue – "The Condor"', desc: 'Marinated grilled chicken topped with ham and melted Swiss on toasted Kaiser. Lettuce, tomato, pickle, red onion. Honey mustard.', price: '$12' },
            { name: 'Hole in One Burger', desc: 'Seasoned Angus patty with American cheese and fried egg on toasted Kaiser.', price: '$12' },
            { name: 'Italian Meatball Slider – "Par 3"', desc: 'Three meatballs on garlic toasted slider buns with Parmesan.', price: '$12' },
            { name: 'Grilled Chicken Sandwich – "The Eagle"', desc: 'Marinated grilled chicken on toasted Kaiser. Add cheese +$0.99.', price: '$11' },
            { name: 'Monte Cristo', desc: 'Ham, turkey, Swiss on white bread, battered and fried, powdered sugar, raspberry jam.', price: '$12' },
            { name: 'Mulligan Burger – "The Mulli"', desc: 'Seasoned Angus built your way on toasted Kaiser. Add cheese +$0.99, jalapeños +$0.50, mushrooms +$0.50, bacon +$0.99.', price: '$10' },
            { name: "Mulligan's Fish Sandwich", desc: 'Beer battered, grilled or blackened. Lettuce, tomato on hoagie. Cole slaw and tartar on the side.', price: '$11' },
            { name: "Mulligan's Philly", desc: 'Thinly sliced roast beef or grilled chicken with onions, peppers, mushrooms, melted provolone on toasted hoagie.', price: '$12' },
            { name: "Mulligan's Turkey Reuben", desc: 'Thinly sliced turkey, sauerkraut, 1000 Island, Swiss on toasted rye.', price: '$11' },
            { name: 'Patty Melt', desc: 'Seasoned Angus on rye with Swiss and grilled onions.', price: '$11' },
            { name: 'Pimento Cheese Burger', desc: 'Seasoned Angus topped with pimento cheese on toasted Kaiser.', price: '$12' },
            { name: 'Pizza Burger', desc: 'Angus burger with marinara, pepperoni, provolone. Choice of side.', price: '$12' },
            { name: 'South of the Border Burger', desc: 'Angus topped with homemade queso and jalapeños on toasted Kaiser.', price: '$12' },
            { name: 'The Black N Blue', desc: 'Blackened Angus with blue cheese crumbles on toasted Kaiser.', price: '$12' },
            { name: 'The "Club House" Club', desc: 'Ham, turkey, Swiss, American, bacon, lettuce, tomato, mayo. Toasted white or wheat.', price: '$11' },
            { name: 'The French Dip', desc: 'Roast beef, melted provolone on toasted hoagie. Au jus for dipping.', price: '$12' },
            { name: 'Turkey Burger', desc: 'Seasoned ground turkey on toasted Kaiser. Add cheese +$0.99.', price: '$10' },
            { name: 'Western Sandwich', desc: 'Grilled chicken or beef in BBQ sauce with bacon, cheddar-jack, onion straws on Kaiser.', price: '$12' },
          ]}
        />

        <MenuSection
          title='Platters & Baskets – "The Back 9"'
          items={[
            { name: 'Chicken Tender Basket', desc: 'Hand-breaded strips, plain or in wing sauces. Choice of side and dipping sauce.', price: '$10' },
            { name: 'Hot Dog Basket', desc: '2 hot dogs with chili and onions. Add coleslaw +$0.50, cheese +$0.50. Choice of side.', price: '$8' },
            { name: 'Fish N Chips', desc: 'Beer battered fish with cole slaw, tartar sauce and one side.', price: '$12' },
            { name: 'Shrimp Platter', desc: 'Breaded, grilled or blackened. Cole slaw and choice of side.', price: '$13' },
            { name: 'Soft Taco Basket', desc: '2 beef or chicken tacos with cheese, lettuce, tomatoes, RC\'s sauce. Chips and salsa. Fish or shrimp +$1.', price: '$8' },
            { name: 'Wing Basket', desc: 'Eight wings with any sauce and choice of side.', price: '$13' },
          ]}
        />

        <MenuSection
          title='Sides – "The Caddie"'
          subtitle="So Many Choices!"
          items={[
            { name: 'French Fries', price: '$3' },
            { name: 'Tater Tots', price: '$3' },
            { name: 'Pub Chips', price: '$3' },
            { name: 'Cole Slaw', price: '$3' },
            { name: 'Onion Rings', price: '$3' },
            { name: 'Side Salad', price: '$3' },
          ]}
        />
      </div>
    </div>
  )
}

function MenuSection({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle?: string
  items: Array<{ name: string; desc?: string; price: string }>
}) {
  return (
    <section className="mb-16">
      <h2 className="font-display text-2xl md:text-3xl text-mulligan-gold mb-2 tracking-wide">
        {title}
      </h2>
      {subtitle && <p className="text-tavern-silver text-sm mb-6">{subtitle}</p>}
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.name} className="border-b border-tavern-gray/50 pb-6 last:border-0">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-tavern-white font-semibold text-lg">{item.name}</h3>
                {item.desc && <p className="text-tavern-silver text-sm mt-1">{item.desc}</p>}
              </div>
              <span className="text-mulligan-gold font-semibold whitespace-nowrap">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
