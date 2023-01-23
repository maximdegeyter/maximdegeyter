<script>
  // @ts-ignore
  import Image from '../assets/maxim.jpg?w=400&h=300&webp';
</script>

<section class="hero__section">
  <div>
    <h1>Hi, I'm Maxim</h1>
    <p class="hero__intro">
      Welcome to my personal spot on the internet! I’m a front-end developer with a passion for
      bringing concepts to life and constantly <strong>improving site interaction</strong> for
      users. In my work, I place a strong <strong>emphasis on A11y and user experience</strong>,
      ensuring that everyone can enjoy the content and features of the sites I build.
    </p>
    <a href="/">Get to know me</a>
  </div>
  <img src={Image} alt="A pic of me staring at the sky" width="333" height="444" />
</section>

<style lang="scss">
  .hero__section {
    margin-top: 12rem;
    height: calc(100vh - 6rem);
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .hero__intro {
    width: 45rem;
  }

  img {
    border: 2px solid #333333;
    border-radius: 0.5rem;
    object-fit: cover;
    position: relative;
    --tw-shadow: 16px 16px 0px #ff6543;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow);
  }
</style>
