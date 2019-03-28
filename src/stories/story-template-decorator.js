function StoryTemplate(context, story) {
   return {
      props: {
         header: {
            type: String,
            default: 'No Story Header Provided'
         }
      },
      template: ` <div id="story-container">
                     <div class="row">
                        <h1 class="twelve columns">${story.story}</h1>
                     </div>
                     <div class="story-content"><story/></div>
                  </div>`
   }
}

export default StoryTemplate;