---
layout: main
title: Home
ogtype: website
class:
---

<h2 class="page-title">
  <span class="cifrao">$ </span><span class="posts-title withoutDisplay">posts</span><span class="blinked-s withoutDisplay">&nbsp;&nbsp;</span>
</h2>

<ul class="posts">
  {% for post in site.posts %}

  	{% if post.draft != true %}
    	<li class="one-post">
          <a class="list-post-title" href="{{ post.url }}">{{ post.title }}</a>
          <span class="date">{{ post.date | date_to_string }}</span>
      </li>
    {% endif %}

  {% endfor %}
</ul>
