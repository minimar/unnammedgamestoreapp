import React from "react";

function ImageGridItem({ image }) {
  const heightAndWidth = getWidthAndHeight(image);

  console.log(heightAndWidth);
  const style = {
    gridColumnEnd: `span ${getSpanEstimate(heightAndWidth.width)}`,
    gridRowEnd: `span ${getSpanEstimate(heightAndWidth.height)}`,
    width: "100%",
    overflow: "hidden"
  };

  return <img style={style} src={image.url} alt={image.alt} />;
}

function getWidthAndHeight(image) {
  const img = document.createElement("img");
  img.src = image.url;

  let size = {
    height: img.naturalHeight,
    width: img.naturalWidth,
  };

  img.remove();

  // console.log(size)

  return size;
}

function getSpanEstimate(size) {
  if (size >= 20) {
    return Math.floor(size / 80);
  }

  return 1;
}

const HomePage = () => (
  <div id="homePage">
    {/* <div> */}
    <div id="leftbar">
      <a href="#">Game</a>
      <a href="#">Genres</a>
      <a href="#">Will</a>
      <a href="#">Be</a>
      <a href="#">Listed</a>
      <a href="#">Here</a>
    </div>
    <div id="header">
      <ul className="navbar" id="topNavbar">
        <li>
          <a href="here.asp">Here</a>
        </li>
        <li>
          <a href="be.asp">Be</a>
        </li>
        <li>
          <a href="will.asp">Will</a>
        </li>
        <li>
          <a href="options.asp">Options</a>
        </li>
      </ul>
    </div>
    <div id="content">
      <div id="gridContainer">
        {ImageGridItem({
          image: {
            url: "https://i.imgur.com/Z0UkXai.jpg",
            width: 787,
            height: 1010,
          },
        })}

        {ImageGridItem({
          image: {
            url: "https://i.imgur.com/Z0UkXai.jpg",
            width: 787,
            height: 1010,
          },
        })}

        {ImageGridItem({
          image: {
            url: "https://www.cemexventures.com/wp-content/uploads/2019/12/43.Modulous.logo_.png",
            width: 787,
            height: 1010,
          },
        })}

        {ImageGridItem({
          image: {
            url: "https://i.imgur.com/Z0UkXai.jpg",
            width: 787,
            height: 1010,
          },
        })}

        {ImageGridItem({
          image: {
            url: "https://i.imgur.com/Z0UkXai.jpg",
            width: 787,
            height: 1010,
          },
        })}

        {ImageGridItem({
          image: {
            url: "https://www.w3schools.com/css/paris.jpg",
            width: 787,
            height: 1010,
          },
        })}

        {ImageGridItem({
          image: {
            url: "https://image.api.playstation.com/vulcan/ap/rnd/202009/2406/m3Ko6r12QZBY6n9JfyfsyXTn.png",
            width: 787,
            height: 1010,
          },
        })}

        {ImageGridItem({
          image: {
            url: "https://img.forconstructionpros.com/files/base/acbm/fcp/image/2021/06/16x9/Modulous_kit_of_parts.60d33dc271115.png?auto=format%2Ccompress&q=70",
            width: 787,
            height: 1010,
          },
        })}

        {ImageGridItem({
          image: {
            url: "https://i.imgur.com/Z0UkXai.jpg",
            width: 787,
            height: 1010,
          },
        })}
        
        {ImageGridItem({
          image: {
            url: "https://i.imgur.com/Z0UkXai.jpg",
            width: 787,
            height: 1010,
          },
        })}

{ImageGridItem({
          image: {
            url: "https://i.imgur.com/Z0UkXai.jpg",
            width: 787,
            height: 1010,
          },
        })}

{ImageGridItem({
          image: {
            url: "https://i.imgur.com/Z0UkXai.jpg",
            width: 787,
            height: 1010,
          },
        })}

{ImageGridItem({
          image: {
            url: "https://i.imgur.com/Z0UkXai.jpg",
            width: 787,
            height: 1010,
          },
        })}

{ImageGridItem({
          image: {
            url: "https://i.imgur.com/Z0UkXai.jpg",
            width: 787,
            height: 1010,
          },
        })}
      </div>
    </div>
    <div id="rightbar">
      <p>This is where game info will go.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
        porttitor purus. Suspendisse dictum nisl at nisi vehicula pharetra.
        Nulla facilisis urna et lorem mattis egestas. Vivamus euismod convallis
        sapien et tincidunt. Etiam velit felis, semper id lobortis id, lobortis
        at nisi. Quisque orci mauris, ultricies in finibus vel, faucibus eget
        lacus. Praesent tempor, dui suscipit suscipit euismod, risus nisl
        placerat lectus, et venenatis ligula augue vitae nunc. Praesent mi
        dolor, tincidunt suscipit nisl non, tristique consectetur sem. Etiam
        malesuada ex leo, nec gravida ipsum sagittis eu. Praesent vestibulum
        justo non metus tristique viverra. Phasellus condimentum convallis enim
        sed egestas. Nunc efficitur sodales elit, non mollis metus. Donec a
        lorem vulputate, faucibus est id, tincidunt eros. Curabitur et malesuada
        est, eu laoreet nisl. Nam rhoncus eros sit amet nibh commodo, in
        faucibus augue tincidunt. Aliquam erat volutpat. Mauris tristique
        vehicula ultricies. Curabitur urna mi, fringilla nec nisl vitae,
        imperdiet vulputate diam. Etiam ac sodales arcu. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin
        pretium odio at mauris ultricies rutrum. Cras eu arcu ex. Vivamus
        vehicula, metus vel ornare rhoncus, sem erat elementum lectus, in
        tristique lectus mauris sit amet metus. Pellentesque non ultrices
        tellus, ac sollicitudin odio. Donec feugiat laoreet urna quis blandit.
        Quisque vitae fringilla libero. Mauris bibendum velit eget felis
        placerat, et consectetur lectus ultrices. Etiam tristique turpis in
        pharetra dapibus. Sed at lacinia urna, nec finibus risus. Mauris
        vestibulum, enim eu faucibus venenatis, odio sapien mattis lectus, quis
        volutpat nulla ex eget nunc. Duis lacinia sapien nec tellus dictum, id
        facilisis velit dapibus. Maecenas ex nunc, tincidunt vel cursus sed,
        consequat id lacus. Donec sollicitudin, erat vel tempor ullamcorper,
        elit dolor dapibus eros, nec ultricies metus magna vitae leo.
        Suspendisse eu tellus et urna ultrices finibus. Sed condimentum enim in
        turpis hendrerit imperdiet. Vestibulum tempus eget quam tincidunt
        tincidunt. Aliquam eget dolor viverra, blandit libero eu, commodo leo.
        Vestibulum hendrerit, elit ac facilisis volutpat, dui diam molestie
        tellus, et egestas diam nunc in libero. Proin eu mauris sit amet massa
        tempus pretium. Integer nibh dui, mattis in bibendum sollicitudin,
        gravida at ipsum. Suspendisse varius nibh ac orci luctus euismod. Donec
        et magna in ante tempor aliquam. Aliquam erat volutpat. Nunc tempus
        ligula urna, non condimentum mauris semper non. Morbi malesuada, orci
        vitae bibendum egestas, augue elit ullamcorper quam, a volutpat orci
        augue a nisl. Quisque scelerisque erat nec augue mollis pulvinar. Nam at
        faucibus orci. Proin dapibus felis at velit dictum dapibus. Nunc dui
        lorem, sollicitudin vel tincidunt tristique, suscipit sit amet mi. Donec
        et rhoncus ex. Morbi eu orci ut ex congue malesuada quis eu risus.
        Aenean at varius nunc. In nec dui ornare, laoreet nulla sit amet,
        venenatis lacus. Fusce feugiat accumsan quam at blandit. Morbi ac ornare
        magna, aliquam tincidunt turpis.
      </p>
    </div>
    <div id="footer">
      <ul className="navbar" id="bottomNavbar">
        <li>
          <a href="interaction.asp">Interaction</a>
        </li>
        <li>
          <a href="options.asp">Options</a>
        </li>
        <li>
          <a href="will.asp">Will</a>
        </li>
        <li>
          <a href="go.asp">Go</a>
        </li>
        <li>
          <a href="here.asp">Here</a>
        </li>
      </ul>
    </div>
  </div>
);

export default HomePage;
