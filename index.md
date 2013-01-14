---
layout: main2
title: Home
ogtype: website
class:
---

<h2 class="posts_title">Últimos posts</h2>

<ul class="posts">
  {% for post in site.posts %}

  	{% if post.draft != true %}
    	<li>
          <span class="date">{{ post.date | date_to_string }}</span>
          <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endif %}

  {% endfor %}
</ul>
