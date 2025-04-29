import React from 'react';

function Gallery() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Enchanted Elegance Bouquet',
      description: 'A graceful arrangement of delicate orchids, lilies, and roses, exuding an air of enchanting elegance.',
      price: '$19.99',
      imageUrl: 'G1.jpg',
    },
    {
      id: 2,
      name: 'Red Petals Bouquet',
      description: 'A fiery mix of red and orange blooms, this bouquet ignites passion and captures the warmth of love.',
      price: '$24.99',
      imageUrl: 'G2.jpg',
    },
    {
      id: 3,
      name: 'Whimsical Woodland Bouquet',
      description: 'A petite, charming bouquet of dainty blooms, nestled in a teacup, evoking serenity and nostalgia.',
      price: '$29.99',
      imageUrl: 'G3.jpg',
    },
    {
      id: 4,
      name: 'Tranquil Teacup Bouquet',
      description: 'With wildflowers and rustic greens, this bouquet brings a touch of the forest to your home, perfect for nature lovers.',
      price: '$15.99',
      imageUrl: 'G4.jpg',
    },
    {
      id: 5,
      name: 'Vintage Charm Bouquet',
      description: 'A blend of classic roses, peonies, and dahlias, this bouquet exudes timeless beauty and old-world charm.',
      price: '$22.99',
      imageUrl: 'G5.jpg',
    },
    {
      id: 6,
      name: 'Dreams Bouquet',
      description: 'A fragrant bouquet featuring lavender and lilac blooms, inducing a sense of calm and sweet reverie.',
      price: '$18.99',
      imageUrl: 'G6.jpg',
    },
    {
      id: 7,
      name: 'Chic Monochrome Bouquet',
      description: 'A monochromatic masterpiece with varying shades of a single color, offering a contemporary and sophisticated look.',
      price: '$21.99',
      imageUrl: 'G7.jpg',
    },
    {
      id: 8,
      name: 'Bountiful Blossoms Bouquet',
      description: 'Phasellus varius, leo ut aliquet eleifend, justo dui eleifend velit, non fermentum justo tortor id nisl.',
      price: '$27.99',
      imageUrl: 'G8.jpg',
    },
    {
      id: 9,
      name: 'Sun-kissed Serenity Bouquet',
      description: 'Radiant sunflowers and calming blue hydrangeas combine to create a bouquet that brings peace and sunshine to any space.',
      price: '$33.99',
      imageUrl: 'G9.jpg',
    },
    {
      id: 10,
      name: 'Harvest Bouquet',
      description: 'Rich, warm hues of gold, orange, and red make this bouquet a symbol of abundance and autumnal beauty.',
      price: '$25.99',
      imageUrl: 'G10.jpg',
    },
    {
      id: 11,
      name: 'Celestial Stardust Bouquet',
      description: 'Shimmering white blooms, silver accents, and star-shaped flowers create a celestial masterpiece',
      price: '$19.99',
      imageUrl: 'G11.jpg',
    },
    {
      id: 12,
      name: 'Springtime Symphony Bouquet',
      description: 'A melodic blend of spring flowers, showcasing the freshness and vibrancy of the season',
      price: '$28.99',
      imageUrl: 'G12.jpg',
    },
    {
      id: 13,
      name: 'Harmony in Blue Bouquet',
      description: 'Shades of blue and white blossoms unite to create a soothing and harmonious bouquet reminiscent of a tranquil sea.',
      price: '$21.99',
      imageUrl: 'G13.jpg',
    },
    {
      id: 14,
      name: 'Radiance Bouquet',
      description: 'A kaleidoscope of colors from every corner of the spectrum, spreading joy and positivity with its vibrant energy.',
      price: '$27.99',
      imageUrl: 'G14.jpg',
    },
    {
      id: 15,
      name: 'Rustic Romance Bouquet',
      description: 'Earthy tones and wildflowers come together in this bouquet, evoking a sense of romance amidst nature',
      price: '$33.99',
      imageUrl: 'G15.jpg',
    },
    {
      id: 16,
      name: 'Whispering Petals Bouquet',
      description: 'A delicate arrangement of soft pastel blooms that seem to whisper tales of love and tenderness.',
      price: '$25.99',
      imageUrl: 'G16.jpg',
    },
    {
      id: 17,
      name: 'Graduation Bouquet',
      description: 'Dark and mysterious, this bouquet features deep purples and blacks, perfect for those who appreciate the beauty of the night.',
      price: '$19.99',
      imageUrl: 'G17.jpg',
    },
    {
      id: 18,
      name: 'Bloomers Bliss Bouquet',
      description: 'Bursting with a mix of seasonal blossoms, its a joyful expression of happiness and natures bounty',
      price: '$28.99',
      imageUrl: 'G18.jpg',
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={`./Images/${product.imageUrl}`} className="card-img-top" alt={product.name} style={{height:"450px"}} />
              <div className="card-body text-center">
                <h5 className="card-title text-gradient d-inline">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h4 className="card-text">{product.price}</h4>
                <button className=" fa fa-shopping-cart btn-gradient ">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
