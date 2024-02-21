import { Link } from "react-router-dom";
import DropdownList from "../components/DropdownList";

const dropdownData = {
  welcome: [
    {
      titleText: "What is Lobe?",
      content: (
        <>
          <p>
            Lobe is a free, private desktop application that has everything you
            need to take your machine learning ideas from prototype to
            production.
          </p>
          <DropdownList
            list={[
              <p>
                <Link to={"/label"}>Label</Link> your examples
              </p>,
              <p>
                <Link to={"/train"}>Train</Link> a model
              </p>,
              <p>
                Evaluate training <Link to={"/train"}>results</Link>
              </p>,
              <p>
                <Link to={"/train"}>Play</Link> with your model
              </p>,
              <p>
                <Link to={"/train"}>Export</Link> and use your model in an app
              </p>,
            ]}
          />
        </>
      ),
    },
    {
      titleText: "What is machine learning?",
      content: (
        <>
          <p>
            Machine learning is software that learns to perform a task from a
            collection of examples rather than through a person explicitly
            defining rules and formulas. This learning software is called a
            <b> model</b>. Teaching a model through examples is called{" "}
            <b>training</b>.
          </p>
          <p>
            Learn more in this{" "}
            <Link
              to={
                "https://aischool.microsoft.com/en-us/machine-learning/learning-paths/ml-crash-course"
              }
            >
              beginner crash course.
            </Link>
          </p>
        </>
      ),
    },
    {
      titleText: "What kind of machine learning can I train with Lobe?",
      content: (
        <>
          <p>
            This version of Lobe learns to look at images using{" "}
            <b> image classification - </b> categorizing an image into a single
            label overall. We are working to expand to more types of problems
            and data in future versions.
          </p>
        </>
      ),
    },
  ],
  label: [
    {
      titleText: "What is Labeling?",
      content: (
        <>
          <p>
            Labeling is assigning categories to your images to create{" "}
            <b>examples </b>
            that teach Lobe. These examples are commonly known as a{" "}
            <b>dataset. </b>
            From this dataset, Lobe will learn to automatically predict a label
            for a given image.
          </p>
        </>
      ),
    },
    {
      titleText: "How do I create a dataset?",
      content: (
        <>
          <p>
            <b>Import and label your images in Lobe.</b>
          </p>
          <DropdownList
            list={[
              <p>
                <b>Images </b> - import common image files directly from your
                computer. Lobe supports JPEG, PNG, BMP, and WebP formats.
              </p>,
              <p>
                <b>Camera </b> - use any connected camera source to capture
                images directly in Lobe. You can optionally provide a label for
                these images. Hold down the camera button to capture a burst of
                images.
              </p>,
            ]}
          />
          <p>
            <b>Import an existing dataset.</b>
          </p>
          <DropdownList
            list={[
              <p>
                <b>Folders </b> - import existing labeled images by using folder
                names as the labels.
              </p>,
            ]}
          />
          <p>
            You can create new labels or edit existing ones by using the text
            box in the bottom corner of each image.
          </p>
          <p>Note</p>
          <DropdownList
            list={[
              <p>
                The max image size Lobe can process is 178,956,970 pixels. For a
                square image, that is about 13,300 x 13,300 pixels. We recommend
                staying lower-resolution for faster processing because Lobe will
                resize and crop your image to a 224 x 224 square.
              </p>,
            ]}
          />
        </>
      ),
    },
    {
      titleText: "What types of images should I collect?",
      content: (
        <>
          <p>
            <b>Collect images that you expect to see in the real world.</b>
            <br />
            Lobe can only learn the patterns that exist in the images you
            provide as examples. Collect images from the same source you expect
            to use with your exported model.
          </p>
          <p>
            <b>Capture as many variations as possible.</b>
            <br />
            Try to capture all the variations that naturally occur by collecting
            images in different conditions. Try different backgrounds, lighting,
            orientations, or zoom. This helps Lobe learn what parts of the image
            are useful for making predictions and what is noise.
          </p>
          <p>
            <b>
              Make sure your content is visible in the center square of the
              image.
            </b>
            <br />
            While training your model, Lobe crops the center square of your
            images.
          </p>
        </>
      ),
    },
  ],
  train: [
    {
      titleText: "What is training?",
      content: (
        <>
          <p>
            Training is how your model learns to predict the correct labels from
            your examples. You can think of your examples as a collection of
            flashcards. During training, your model will continually look
            through the flashcards and try to find similar patterns that help it
            guess the right answers.
          </p>
          <p>
            Read more{" "}
            <Link to={"/machine_learning"}>machine learning basics</Link>
          </p>
          <p>
            Read more about <Link to={"/label"}>labeling your examples</Link>
          </p>
        </>
      ),
    },
    {
      titleText: "How do I start training?",
      content: (
        <>
          <p>
            Lobe automatically starts training when your examples meet the
            minimum requirements. To start training, you need:
          </p>
          <DropdownList
            list={[
              <p>
                Imported images to{" "}
                <Link to={"https://www.lobe.ai/docs/label/label"}>
                  label as examples
                </Link>
              </p>,
              <p>At least two labels</p>,
              <p>At least five images per label</p>,
            ]}
          />
          <p>
            Lobe will also follow best practices to continue training when you
            make changes to your examples. If you make large changes or
            add/remove labels, Lobe will reset training and start training a new
            model.
          </p>
          <p>
            After automatic training has completed, you can manually optimize
            your model to train for longer for better real-world performance
            <b> (File {">"} Optimize Model)</b>.
          </p>
        </>
      ),
    },
    {
      titleText: "How long will training take?",
      content: (
        <>
          <p>
            Training time is quite variable and depends on how hard it is to
            distinguish between the labels in your examples and how many
            examples you have. It can take anywhere from minutes to hours, and
            sometimes days for very large problems.
          </p>
          <p>
            You can hover over the training progress to see a time estimate.
            This training time estimate is updated every few seconds based on
            your progress and computer’s current processing speed. You may see
            it fluctuate if you are performing other tasks on your computer as
            available CPU and memory change.
          </p>
        </>
      ),
    },
  ],
  results: [
    {
      titleText: "What are my training results?",
      content: (
        <>
          <p>
            our results show you which images your model is predicting correctly
            and incorrectly. Correct predictions have green labels and incorrect
            predictions have red labels. The width of the label bar represents
            how confident the model was in that prediction.
          </p>
          <p>
            Hovering over a predicted label will show the true label you gave
            that image. The more correct the predictions, the better the model
            is performing.
          </p>
          <p>You can view and sort your images in different ways to check:</p>
          <DropdownList
            list={[
              <p>
                Whether your model is successfully learning all the labels with
                <b> View {">"} All Images</b> selected.
              </p>,
              <p>
                Approximately how well it will work on new images with{" "}
                <b>View {">"} Test Images</b> selected.{" "}
                <Link to={"/test_images"}>Learn more about test images.</Link>
              </p>,
              <p>
                Which images and labels confuse your model by selecting your
                individual labels in the sidebar.
              </p>,
            ]}
          />
        </>
      ),
    },
    {
      titleText: "How do I see labels that are confused with one another?",
      content: (
        <>
          <p>
            Select your individual labels in the sidebar to see results specific
            to that label. Lobe will show you which other labels are commonly
            confused with this one.
          </p>
          <p>
            Try to spot what similarities exist between the images that confuse
            the model and the images in the true label. For example, you may
            notice the same background color across the confused images and the
            images in your label. If you notice these patterns, try to collect
            varying images that look like the confused image to better teach
            Lobe what patterns to ignore. In this example, collect more images
            in your selected label with varying background colors.
          </p>
        </>
      ),
    },
    {
      titleText: "How do I see images that confuse the model?",
      content: (
        <>
          <p>
            To see where your model is most confused, look at the most confident
            incorrect predictions and the least confident correct predictions.
          </p>
          <DropdownList
            list={[
              <p>
                Select View {" > "} Correct First to view your predictions
                sorted by most confident to least confident. Try to find any
                patterns where your model was very confident in its wrong
                prediction.
              </p>,
              <p>
                Select View {" > "} Incorrect First to view your predictions
                sorted by least confident to most confident. See where your
                model is least confident with its correct predictions.
              </p>,
            ]}
          />
          <p>
            Collect more variations of images that have similar patterns to
            these two cases to help your model improve.
          </p>
        </>
      ),
    },
  ],
  play: [
    {
      titleText: "How can I play with my trained model?",
      content: (
        <>
          <p>
            Use images from your computer or use the webcam as a video feed to
            test your model on new images live. Try to actively trick your model
            and see patterns where it is getting images incorrect. Help improve
            you model by giving feedback on its predictions.
          </p>
        </>
      ),
    },
    {
      titleText: "Can I correct an incorrect prediction?",
      content: (
        <>
          <p>
            To give your model feedback, you can edit the prediction text box
            directly and add the image and label as an example. Alternatively,
            click the correct or incorrect buttons on the image to add it as an
            example. Lobe will automatically train with these new examples to
            continually improve.
          </p>
        </>
      ),
    },
    {
      titleText: "Can I view multiple images at once?",
      content: (
        <>
          <p>
            Currently, you can only view a single image at a time or use your
            webcam as a video feed.
          </p>
        </>
      ),
    },
  ],
  export: [
    {
      titleText: "How do I use my model?",
      content: (
        <>
          <p>
            Your model is a collection of files that other programs can load to
            run predictions. These files store both the structure of your model
            and the weights that are a result of training.
          </p>
          <p>
            You can directly upload your model to{" "}
            <Link to={"/power_apps"}>Power Platform</Link> to use in Power Apps
            or Power Automate. You can also use the model files locally in your
            own app or in most major cloud platforms to create an API. Lobe also
            hosts your model as a local API to help kickstart your app
            development.
          </p>
        </>
      ),
    },
  ],
  improving: [
    {
      titleText: "How can I improve my model?",
      content: (
        <>
          <p>
            Your examples are your model’s source of truth about the world. Here
            are some best practices for building successful projects:
          </p>
          <DropdownList
            list={[
              <p>
                Understand your problem - start simple, expand over time. Break
                your scenario down into smaller experiments to prototype and
                then expand over time.
              </p>,
              <p>
                Lobe only learns from the examples you import. Try to collect
                examples that cover the different types of images your model
                will see and make predictions on in the future.
              </p>,
              <p>
                More images always help - new and unique images are better. The
                more unique and different the images are, the better your model
                will learn to generalize.
              </p>,
              <p>
                If you can’t classify the label from looking at an image, it
                will also be difficult for Lobe. Make the image content as large
                and relevant to your label as possible.
              </p>,
            ]}
          />
        </>
      ),
    },
  ],
  tips: [
    {
      titleText: "How can I learn more about Lobe?",
      content: (
        <>
          <p>Follow announcements on our website and social media:</p>
          <DropdownList
            list={[
              <p>
                <Link to={"https://lobe.ai/"}>Website</Link>
              </p>,
              <p>
                <Link to={"https://www.twitter.com/lobe_ai"}>Twitter</Link>
              </p>,
              <p>
                <Link to={"https://www.facebook.com/lobeai"}>Facebook</Link>
              </p>,
              <p>
                <Link to={"https://www.reddit.com/r/lobe"}>Reddit</Link>
              </p>,
            ]}
          />
          <p>
            Watch our <Link to={"https://aka.ms/LobeTour"}>intro tour</Link>
          </p>
        </>
      ),
    },
  ],
};

export { dropdownData };
