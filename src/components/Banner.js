import Button from "./Button";

function Banner() {
  return (
    <section class="hero-banner center">
      <div class="container center">
        <div class="hero-content flex gap-2">
          <h2>Unleash Cinematic Enchantment</h2>
          <p>Experience the magic of cinema with StarCineplex! Book your tickets now for an unforgettable movie adventure. Grab your popcorn and immerse yourself in the big screen excitement today!</p>
          <div className="buttons-container flex gap-2">
            <Button primary={true} />
            <Button primary={false} />
          </div>
        </div>
      </div> 
      </section>
  )
}

export default Banner;