// vim: syntax=JSX
import React from "react";

function Content(props) {
  const bubbleUpEditableSelectedRegion = (e) => {
    const arrowEvents = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
    if (arrowEvents.includes(e.key) && e.shiftKey) {
      bubbleUpSelectedRegion(e);
    }
  };

  const bubbleUpSelectedRegion = (e) => {
    const { setBtnsGroupPosition, showButtonsGroup } = props;

    try {
      const selection = window.getSelection();

      if (selection.toString()) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        setBtnsGroupPosition(rect);
        showButtonsGroup();
      }
    } catch (error) {
      console.log("==", error);
    }
  };

  const contentSectionStyles = {
    textAlign: "justify",
    background: "#fff",
    padding: "20px",
  };

  return (
    <div>
      <section
        style={contentSectionStyles}
        // onMouseUp={bubbleUpSelectedRegion}
        onMouseMove={bubbleUpSelectedRegion}
        onKeyUp={bubbleUpEditableSelectedRegion}
      >
        <h1 style={{ textAlign: "center" }}>
          Nulla malesuada pellentesque elit eget
        </h1>
        <p>
          Dignissim suspendisse in est ante in nibh. Est ultricies integer quis
          auctor elit sed vulputate. Elementum curabitur vitae nunc sed velit
          dignissim sodales ut. Turpis egestas integer eget aliquet nibh. Ac
          feugiat sed lectus vestibulum mattis ullamcorper. Leo a diam
          sollicitudin tempor id eu nisl. Leo a diam sollicitudin tempor id eu
          nisl nunc. Nulla malesuada pellentesque elit eget. Pharetra massa
          massa ultricies mi quis hendrerit. In fermentum posuere urna nec
          tincidunt. Tempus imperdiet nulla malesuada pellentesque elit. Eget
          egestas purus viverra accumsan in nisl nisi scelerisque. Neque ornare
          aenean euismod elementum. Egestas congue quisque egestas diam in arcu
          cursus euismod quis. Porta non pulvinar neque laoreet suspendisse
          interdum consectetur. Sed lectus vestibulum mattis ullamcorper velit
          sed ullamcorper morbi tincidunt. Nam libero justo laoreet sit amet.
          Imperdiet proin fermentum leo vel orci porta non pulvinar. Convallis
          tellus id interdum velit. Nunc eget lorem dolor sed viverra ipsum nunc
          aliquet bibendum. Massa vitae tortor condimentum lacinia quis vel eros
          donec ac. Nunc mattis enim ut tellus. Lobortis scelerisque fermentum
          dui faucibus in ornare quam viverra. Tellus elementum sagittis vitae
          et. Pharetra pharetra massa massa ultricies mi. Aliquam vestibulum
          morbi blandit cursus. Enim blandit volutpat maecenas volutpat blandit
          aliquam. Eget velit aliquet sagittis id. Egestas sed sed risus pretium
          quam vulputate dignissim. Egestas dui id ornare arcu odio ut sem nulla
          pharetra. Felis eget nunc lobortis mattis aliquam faucibus purus in
          massa. Ultrices in iaculis nunc sed augue lacus viverra. Diam in arcu
          cursus euismod quis viverra. Etiam non quam lacus suspendisse faucibus
          interdum posuere. Imperdiet proin fermentum leo vel orci porta non
          pulvinar. Leo a diam sollicitudin tempor id eu. Ultrices neque ornare
          aenean euismod elementum nisi. Faucibus vitae aliquet nec ullamcorper.
          Enim facilisis gravida neque convallis a cras. Vitae semper quis
          lectus nulla. Amet tellus cras adipiscing enim. Pharetra vel turpis
          nunc eget lorem dolor sed viverra ipsum. Mattis nunc sed blandit
          libero. Habitasse platea dictumst vestibulum rhoncus. Metus aliquam
          eleifend mi in. Id leo in vitae turpis. Id semper risus in hendrerit.
          Ipsum consequat nisl vel pretium lectus quam id. Posuere urna nec
          tincidunt praesent semper feugiat nibh sed. Nisi quis eleifend quam
          adipiscing. Hac habitasse platea dictumst vestibulum rhoncus est.
          Aliquet eget sit amet tellus. Lobortis feugiat vivamus at augue eget
          arcu dictum. Risus ultricies tristique nulla aliquet enim tortor at
          auctor. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames.
        </p>
        <p>
          There are few things quite so simple as a door. To open it, you can
          pull it or you can push it. And yet, this is often perplexing - and
          when you figure out the basic signs that indicate whether to pull or
          push, you will find they are used inconsistently. And sometimes, you
          will even encounter a door that slides. So fumbling with a door
          happens quite often: we push a door that is meant to be pulled or
          vice-versa. We solve the problem rather quickly and are not
          permanently obstructed, but it's annoying all the same. And it happens
          far more often than it should. The author pauses to mention he has
          used this analogy quite often, such that a poorly designed door is
          called a <strong>Norman Door</strong>- Google it.
        </p>
        <p>
          The author refers to Jacques Carelman, who has developed an entire
          series of books called "D'objets Introuvables" (roughly, "Confusing
          Objects") that provides many examples of everyday things that are
          unworkable, ill-formed, ill-conceived, and thoroughly bad in every
          way. It's an entertaining read, but a sad reminder of how many badly
          designed objects frustrate and annoy us in our everyday lives.
        </p>
        <p>
          He tells an anecdote about a friend getting trapped in a post office
          between two rows of glass doors. The visual effect of the architecture
          was quite elegant, and "probably won design awards," but made it
          unclear which side of the door would swing open. So after passing
          through the first set of doors, he pushed on the wrong side of a door
          (the side with the hinges) and assumed it was locked. He turned around
          and did the same thing, and then assumed that the door had locked
          behind him. He remained stuck there until someone else wandered
          through the doors and he was able to figure out what had gone wrong.
        </p>
        <p>The two most important characteristics of good design are:</p>
        <ul>
          <li>
            <span id="Timestamp123332323">Discoverability - A user can</span>
            figure out what actions are possible and how to perform them using
            the product (How can I use it?)
          </li>
          <li>
            Understanding - A user understands the benefit of using the product
            and how to derive it (Why should I use it?)
          </li>
        </ul>
        <p>
          The glass doors in the anecdote above show a failure of
          discoverability: a glass pane with four metal squares at the corners
          does not enable the user to recognize how it can be used, or even to
          perceive by inspection how it might be used. Omitting a push-plate and
          concealing the hinges were deliberate design choices - and very bad
          ones, as they made it impossible to see how to operate the door, or
          even to recognize it was a door at all.
        </p>
        <p>
          The more complex a device becomes, the more difficult it is for an
          individual to determine what to do merely by looking at it. We provide
          manuals or training courses to teak people to use complex devices like
          computers or airplanes. But the author suggests that many devices are
          made to be complex by including too many functions, controls, and
          unnecessary features. A washing machine shouldn't look like the
          control room of a spaceship, with a bewildering array of controls and
          displays, considering that most people will never use all of the
          settings and features the modern washing machine provides.
        </p>
        <p>
          Another brief anecdote: a couple who purchased a state-of-the-art
          washer/dryer combination device were complexes by all the controls.
          The husband refused to go near it, and the wife had figured out one
          method of getting it to work and ignored everything else. These
          weren't stupid people - one was an engineer and the other a physician
          - they simply didn't want to devote the time to learning a complex
          device to perform the simple task of washing clothing.
        </p>

        <h2 id="modernComplex">The Complexity of Modern Devices</h2>
        <p>Begin with the premise: all artificial things are designed.</p>
        <p>
          That is not to say that they are designed well, or that much thought
          is put into them - but they are intentionally crafted and arranged by
          someone. And given that, then there are an enormous number of things
          that impact the daily lives of modern man that have been designed -
          and unless you're on a camping trip in the wilderness, chances are the
          number of "designed" objects in your environment far outnumber the
          ones that are truly natural.
        </p>
        <p>
          In the best of cases, products should be designed to be easy to use,
          such that they do not become an obstruction or distraction, but can be
          used to accomplish the things we wish to do with a minimum of
          distraction. Sadly, this is not the case, and the stress and
          frustration of modern life largely arises from the fact that we live
          in a poorly designed world, full of awkward and difficult things - and
          this is the failure of their designers.
        </p>
        <p>
          Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc.
          Porttitor lacus luctus accumsan tortor posuere ac ut consequat.
          Hendrerit gravida rutrum quisque non tellus. Lacinia at quis risus
          sed. Fusce id velit ut tortor pretium viverra suspendisse. Urna id
          volutpat lacus laoreet. Quis lectus nulla at volutpat diam ut
          venenatis. Ornare massa eget egestas purus viverra accumsan in. Arcu
          dictum varius duis at consectetur lorem donec massa sapien. Facilisis
          leo vel fringilla est ullamcorper eget nulla. Ut lectus arcu bibendum
          at varius. Mattis enim ut tellus elementum sagittis. Dignissim diam
          quis enim lobortis. Pellentesque sit amet porttitor eget dolor. A diam
          maecenas sed enim. Orci dapibus ultrices in iaculis nunc sed augue.
          Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nulla
          porttitor massa id neque aliquam vestibulum morbi. Consequat ac felis
          donec et odio pellentesque diam volutpat commodo. Malesuada bibendum
          arcu vitae elementum curabitur vitae nunc. Mus mauris vitae ultricies
          leo. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
          Arcu odio ut sem nulla pharetra diam. Elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique. Sed velit
          dignissim sodales ut eu. Nunc consequat interdum varius sit amet
          mattis vulputate enim nulla. Fringilla phasellus faucibus scelerisque
          eleifend donec. Aliquet bibendum enim facilisis gravida neque. Et
          ultrices neque ornare aenean euismod. In fermentum et sollicitudin ac
          orci phasellus egestas. Leo duis ut diam quam nulla porttitor massa.
          Felis bibendum ut tristique et. Pretium lectus quam id leo in vitae
          turpis. Odio eu feugiat pretium nibh ipsum consequat nisl vel.
        </p>
        <ul>
          <li>
            Industrial Design - A manufacturing practice that considers the
            function, value, and appearance of a product for the mutual benefit
            of both user and manufacturer
          </li>
          <li>
            Interaction Design - A technology practices that considers not
            merely the device's function, but the way in which the user must
            interact with the device
          </li>
          <li>
            Experience Design - A service industry practice that considers the
            way in which the customer will interact with a business, with a goal
            of increasing the quality and enjoyment of the total experience.
          </li>
        </ul>

        <h2 id="designChallenge">The Design Challenge</h2>
        <p>
          <em>
            <strong>Design</strong>
          </em>{" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          sed tempus urna et pharetra pharetra massa massa ultricies. Quis
          hendrerit dolor magna eget est lorem ipsum. Tristique risus nec
          feugiat in fermentum posuere urna nec. Et pharetra pharetra massa
          massa ultricies mi. In hac habitasse platea dictumst quisque sagittis
          purus sit. Diam vulputate ut pharetra sit. Nullam eget felis eget nunc
          lobortis mattis. Augue neque gravida in fermentum et sollicitudin ac
          orci phasellus. Magna ac placerat vestibulum lectus mauris ultrices
          eros in cursus. Scelerisque felis imperdiet proin fermentum leo.
          Pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et netus et. Ac auctor augue mauris augue neque gravida in fermentum
          et. Risus pretium quam vulputate dignissim suspendisse. Tincidunt arcu
          non sodales neque sodales ut etiam sit amet. Ut tortor pretium viverra
          suspendisse. Enim tortor at auctor urna nunc id cursus. Arcu odio ut
          sem nulla. Varius vel pharetra vel turpis nunc. Dui sapien eget mi
          proin. Ullamcorper morbi tincidunt ornare massa. Ac turpis egestas
          integer eget aliquet nibh praesent tristique magna. Elit scelerisque
          mauris pellentesque pulvinar pellentesque habitant morbi. Pulvinar
          neque laoreet suspendisse interdum consectetur. Ultricies mi eget
          mauris pharetra et ultrices neque ornare. Tempor orci dapibus ultrices
          in iaculis nunc sed augue. Nunc eget lorem dolor sed. Proin nibh nisl
          condimentum id venenatis a condimentum vitae. Amet massa vitae tortor
          condimentum lacinia quis vel eros donec. Volutpat maecenas volutpat
          blandit aliquam. Quis lectus nulla at volutpat diam ut venenatis
          tellus in. Ac tortor dignissim convallis aenean et tortor at. Eros in
          cursus turpis massa tincidunt dui ut. Facilisis volutpat est velit
          egestas. Dictum fusce ut placerat orci nulla pellentesque dignissim.
          Ornare quam viverra orci sagittis. Quam elementum pulvinar etiam non
          quam. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum.
          Cras sed felis eget velit aliquet sagittis id. Faucibus ornare
          suspendisse sed nisi. Suscipit adipiscing bibendum est ultricies
          integer quis. Id aliquet lectus proin nibh nisl. Consectetur
          adipiscing elit ut aliquam. Consequat semper viverra nam libero. Orci
          sagittis eu volutpat odio facilisis mauris sit. Velit laoreet id donec
          ultrices tincidunt arcu. Amet luctus venenatis lectus magna. Elementum
          sagittis vitae et leo duis ut. Morbi tristique senectus et netus et
          malesuada. Commodo viverra maecenas accumsan lacus vel. Urna
          condimentum mattis pellentesque id nibh tortor id aliquet lectus.
          Vestibulum sed arcu non odio euismod lacinia at. Egestas quis ipsum
          suspendisse ultrices gravida dictum fusce ut. Risus sed vulputate odio
          ut. Enim sed faucibus turpis in eu. Elit pellentesque habitant morbi
          tristique senectus et netus et malesuada. Sit amet tellus cras
          adipiscing enim eu turpis egestas. Congue quisque egestas diam in arcu
          cursus euismod. Potenti nullam ac tortor vitae purus faucibus ornare.
          Consequat nisl vel pretium lectus quam id leo in vitae. Dolor magna
          eget est lorem. Velit ut tortor pretium viverra suspendisse potenti
          nullam ac.
        </p>
        <p>
          The hardest part of design is often to simply get people to agree on
          these goals - or to get a single person to be reasonable in setting
          them. A customer wants the product to be both high-quality and cheap,
          to have many functions but be easy to use, and so on. It is the
          designer who balances one desire against the other.
        </p>
        <p>
          And even if you can find a way to satisfy the competing demands of the
          customer, there is then the demands of the organization that is
          producing the device. Aside of wanting it to be producible at a cost
          that enables them to make a profit, they may want it to be easy to
          service, easy to ship, etc.
        </p>
        <p>
          The happy ending to all this conflict is that it can be done - and
          every product that is commercially successful is proof that it has
          been done. The task for designers in the competitive market is simply
          to do it better.
        </p>
      </section>
    </div>
  );
}

export default Content;
