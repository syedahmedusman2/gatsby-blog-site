const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  plugins: [    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "eqnj6x4bgjgv",
        accessToken: "5cIdRGTk3CRhsXytUaPKyKOtNQqAcyTO5wM3x09iOKk",
      },
    },
  ],
}