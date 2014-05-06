###Simple — A theme for Ghost 

###Overview
**Simple** is clean, minimal and responsive theme for Ghost.

**Demo**: [http://www.jonwgeorge.com](http://www.jonwgeorge.com/)

####Features
- Clean and minimal design
- Responsive HTML5/CSS3 layout with Rich Snippets
- Twitter Cards
- Static pages
- Ouija integration
- Social links
- Fullscreen image viewer
- Syntax Highlight
- Custom fonts

###Installation
1. Extract content of ZIP archive from GitHub into theme directory: <code>/content/themes/simple</code>.
2. Restart **Ghost** instance.
3. Sign in to **Ghost Admin**, then go to **Settings → General** and select **simple** in themes list.

###Configuration

####Social links
Set up links to your social profiles in <code>partials/social-links.hbs</code>.
You can add another social icons if you want because **Simple** uses Font Awesome Icons. You can check out all social icons [here](http://fontawesome.io/icons/#brand "Font Awesome Icons").

####Ouija comments
**PLEASE NOTE: Ouija comments are still in development, and may not work as intended. If you do not wish to use this feature, you may replace the contents of the <code>partials/comments.hbs</code> with the embed code of the platform of your choice.

If you would like to use Ouija comments just change your shortname in <code>partials/comments.hbs</code>:
<pre><code>{{! GoInstant username }}
example</code></pre>

####Static pages menu
Ghost Aton (0.4) bring to us static pages feature. So if you want to add links of static pages in menu, you need to modify <code>partials/navigation.hbs</code>.

#####Search Box
Simple uses a search funtion powered by <a href="https://github.com/i11ume/ghostHunter">Ghost Hunter</a>. Just type and your posts will be automaticlly indexed and displayed.

####Twitter Cards
Set up your Twitter profile in <code>post.hbs</code>:
<pre><code>&lt;meta name="twitter:site" content="@username"&gt;
&lt;meta name="twitter:creator" content="@username"&gt;</code></pre>