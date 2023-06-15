const locators = {
    HOME: {
        TITLE: '.navbar-brand',
        GLOBALFE: '[href="/?tab=all"]',
        FN_XP_NAME_AUTHOR: author => `(//div//a[contains(., '${author}')])[1]`,
        FN_XP_IMG_AUTHOR: author => `(//img[@alt='${author}'])[1]`,
        XP_SIGNIN_FEED: "//a[normalize-space()='Sign in to see your Feed']",
        FN_XP_TAGS: tag => `//a[normalize-space()='${tag}']`,
        XP_READ_MORE: "(//span[contains(text(),'Read more...')])[1]",
        FN_XP_READ_MORE: title => `(//h1[contains(text(),'${title}')])[1]//..//span`,
        XP_TITLE_READ_MORE: title => `//h1[contains(text(),'${title}')]`,
        FN_XP_Date: date => `(//span[@class='date'][normalize-space()='${date}'])[1]`,
        FN_XP_ALL_AUTHORS: authors => `(//a[@class='author'][contains(text(),'${authors}')])`,
        FN_XP_SIGN_IN_UP: inf => `//p[contains(text(),'or')]//a[normalize-space()='${inf}']`,
        FN_XP_LINKS_POST: links => `(//a[normalize-space()='${links}'])[1]`,
        FN_XP_PAGE: page => `(//a[normalize-space()='${page}'])[1]`,
        FN_XP_AUTHOR_TITLE: author => `//h4[contains(text(),'${author}')]`,
        FN_XP_PG_TABS: tab => `//a[normalize-space()='${tab}']`,
        FN_XP_LOGIN_REGIS: text => `//a[normalize-space()='${text}']`,
        XP_NEW_POST: "//a[@href='/editor']"

    },
    LOGIN: {
        XP_TITLE: "//h1[normalize-space()='Sign In']",
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        XP_LOGIN: "//a[normalize-space()='Sign in']",
        XP_NEED_ACCOUNT: "//a[normalize-space()='Need an account?']",
        XP_BT_SIGN_IN: "//button[normalize-space()='Sign in']",
        XP_MESSAGE_LOGIN_WRONG: "//h1[normalize-space()='Something went wrong']",
        FN_XP_USER: name => `//a[normalize-space()='${name}']`

    },
    SIGNUP: {
        XP_TITLE: "//h1[normalize-space()='Sign up']",
        XP_HAVE_ACCOUNT: "//a[normalize-space()='Have an account?']",
        XP_BT_SIGN_UP: "//button[normalize-space()='Sign up']",
        EMAIL: "[name='email']",
        PASSWORD: "[name='password']",
        USER_NAME: "[name='username']",
        XP_MESSAGE: text => `//li[normalize-space()='${text}']`,
        XP_NAME_USER: name => `//a[normalize-space()='${name}']`

    },
    NEWPOST: {
        XP_BT_PUBLISH: "//button[normalize-space()='Publish Article']",
        MSG_BLANK_TITLE: ".error-messages > li",
        NAME_TITLE: "[name='title']",
        DESCRIPTION: "[name='description']",
        BODY: "[name='body']",
        TAGS: "[placeholder='Enter tags']",
        TITLE_REG_POST: "h1"
    }

}

export default locators;