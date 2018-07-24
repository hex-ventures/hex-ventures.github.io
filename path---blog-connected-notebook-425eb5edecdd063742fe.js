webpackJsonp([0xbe4312ae6fa5],{829:function(e,t){e.exports={data:{markdownRemark:{html:'<h3 id="do-your-notes-generate-ideas"><a href="#do-your-notes-generate-ideas" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Do your notes generate ideas?</h3>\n<p>There is a connectivity problem with today’s digital notebooks.</p>\n<p>As Tiago explains in <a href="https://praxis.fortelabs.co/p-a-r-a-iii-building-an-idea-generator-400347ef3bb6/">P.A.R.A. III: Building an Idea Generator</a>, organizational methods for retrieving ideas from note-taking applications rely on imposing structure. A structure is necessary because of the hierarchical nature of knowledge management software, namely note-taking apps. Maintaining the proper hierarchy is burdensome, yet failure to do so reduces, if not eliminates, your notes’ future value. Impose too much order, however, and you’ll reduce the opportunity for the serendipitous connections that make you creative and help generate new ideas.</p>\n<p>Tiago and his team identified this problem and took action. They developed <a href="https://gitlab.com/fortelabs/evernote-random">RandomNote</a>, an application that adds randomness into your workflow by retrieving, as its name suggests, a random note from Evernote when you click it.</p>\n<p>The app <em>“allows notes in different notebooks to encounter each other,”</em> helping to shine light on unidentified connections and revealing new ideas. RandomNote is a great hack for those moments you feel “stuck” on something.</p>\n<p>RandomNote is undoubtedly an effective tool, but look closer and you’ll find it suggests much larger questions about current note-taking software. Why should we rely solely on serendipity and luck to inspire connections and resurface old thoughts? What if we could make connection more <em>purposeful</em>? We are building Tangle to do just that.</p>\n<p><strong>Tangle is a complete overhaul of traditional note-taking technology that puts principles of discoverability and connectivity first.</strong> To accomplish this, we have rethought the data structure of current digital note-taking tools. Instead of using a hierarchical structure, <strong>Tangle uses one built for connection: a graph.</strong></p>\n<p>The graph database enables Tangle to be a <strong>connection-first notebook</strong> that elevates idea generation and enhances the creative process.</p>\n<h3 id="what-is-a-graph"><a href="#what-is-a-graph" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is a graph?</h3>\n<p>Graphs are great for modeling data that have many <em>relationships</em>. Graphs contain two types of data: nodes and edges. A node is something like a person, company, or city. Nodes are described with properties and labels, and they are relatable in some way to another node. Edges represent those relationships. They are described with unique properties.</p>\n<blockquote>\n<p>Nodes are <em>things</em> that are relatable. Edges are <em>relationships</em> between them.</p>\n</blockquote>\n<p>Take the following example:</p>\n<p>Two <em>Giraffes</em>, <strong>Edward and Norton</strong>, are friends. Both <strong>Edward</strong> and <strong>Norton</strong> eats the <em>fruit</em>, apricots.</p>\n<p><img src="https://storage.googleapis.com/usetangle-static-assets/blog/graph_example.png" alt="giraffe"></p>\n<p>This sentence is a domain in which we have Giraffe nodes, “Edward” and “Norton”, a fruit node, “apricot”, and the relationships between them, “friends” and “enjoy eating.” By taking this statement, and identifying the relevant components, one can begin to build a model.</p>\n<p>But why can’t we just use a normal database to do this?</p>\n<p>The core reason is that traditional <strong>SQL and other noSQL databases cannot scale effectively to handle these kinds of relationships</strong>. When traversing thousands of relationships, SQL databases must do something called foreign key lookups. These lookups require the database to go to an index, which is essentially a file stored somewhere in your database. You can imagine that on average, this SQL operation takes X milliseconds when following a single relationship. If you want to traverse 10,000 relationships, it would take X*10,000 milliseconds. This is not ideal for data with a lot of relationships.</p>\n<p>Native graph databases like <a href="https://neo4j.com/">Neo4j</a> use a technique called index-free adjacency to solve this problem. Neo4j stores references to other records as pointers from a starting record, rather than in an index of foreign keys located in a database. <strong>When performing deep traversals on large datasets in a graph, problems that previously took hours can take milliseconds.</strong> This is profound, and its enabling us to power a model of connection at breakneck speed. If you’d like to learn more, check out this <a href="https://neo4j.com/blog/why-graph-databases-are-the-future/">Neo4j article</a> that dives deeper into the power of graph databases.</p>\n<h3 id="the-note-graph"><a href="#the-note-graph" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The note-graph</h3>\n<p>Tangle uses the power of the graph database to enable real-time connections between your notes. You could not use a SQL data structure and hope to achieve the same level of performance. What we end up with is something more akin to a <em>note-graph</em> than a traditional notebook.</p>\n<p>Because Tangle’s graph stores the relationships between your notes, we are able to <strong>abstract away any need for manual organization</strong>. Anytime you capture a thought or take a note in Tangle, it automatically shows you the connections to any of your related content. You do no work to surface these connections; Tangle takes care of it for you instantly.</p>\n<p>I’ll walk you through what this looks like in practice with a couple GIFs. In the first one below, I have a new note open, or what we call a “collection.” The collection, on the left, is a collection of related notes and thoughts I have captured — as you can tell by the title, this one is about the World Cup. As I capture different thoughts about the games, players, and my sadness at the United States’ failure to qualify, related captures I have written previously start to pop up.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 54.0625%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://player.vimeo.com/video/278735859" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>How does this work? Tangle analyzes the text using natural language processing — a type of machine learning that enables computers to understand language. In milliseconds, Tangle absorbs the content and traverses the graph, looking for other notes to which the original might have a connection.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 54.0625%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://player.vimeo.com/video/278735643" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>The environment Tangle creates is connection-first. It’s goal is to surface your related content when it might be useful to you. We believe that this opens up a new paradigm of enhanced creativity and productivity. No need to spend time on strict organizational structures to get the most out of your notes, no workflow disruption searching for notes you have already taken, and no more time-sink researching something online that might be hidden in your folder structure.</p>\n<h3 id="so-whats-next"><a href="#so-whats-next" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>So what’s next?</h3>\n<p>We are currently hard at work improving Tangle and are looking for feedback. If you are someone at the intersection of knowledge management and technology (and like trying new tech) we would love for you to participate in our alpha release. There is still time — we will be launching to select users over the next few weeks. Want to be one of them? <a href="https://ventures.us17.list-manage.com/subscribe?u=710569ad280cf37e55faa0612&#x26;id=1f711ff76c">Sign up here!</a></p>\n<p>The Tangle team also distributes a weekly newsletter providing development updates, KM blog posts, as well as other inspiring content from around the web. <a href="http://eepurl.com/djoBb5">Click here</a> to keep in touch with us!</p>\n<p>Lastly, if you’d like to get in touch directly, please feel free to email info@usetangle.com with any questions, comments, suggestions, or any bit of general feedback. We are open to it.</p>\n<p>Thanks for reading and thank you to the Praxis team for letting us share Tangle with you.</p>',timeToRead:5,excerpt:"Do your notes generate ideas? There is a connectivity problem with today’s digital notebooks. As Tiago explains in  P.A.R.A. III: Building…",frontmatter:{title:"The Connected Notebook",cover:"",date:"2018-07-06",category:"The Tangle Blog",tags:["Tangle","Connected","Demo"]},fields:{slug:"/blog-connected-notebook"}}},pathContext:{slug:"/blog-connected-notebook"}}}});
//# sourceMappingURL=path---blog-connected-notebook-425eb5edecdd063742fe.js.map