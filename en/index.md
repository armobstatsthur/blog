---
layout: main
title: Home
ogtype: website
class:
locale: en
---

<header class="cabecalho">
  <span class="cifrao">$ </span>
  <h1 class="page-title">
    <span class="posts-title withoutDisplay">posts</span><span class="blinked-s withoutDisplay">&nbsp;&nbsp;</span>
  </h1>
</header>

<ul class="posts">
  {% for post in site.posts %}

  	{% if post.draft != true %}
      {% if post.locale == "en" %}
    	<li class="one-post">
          <a class="list-post-title" href="{{ post.url }}#post">{{ post.title }}</a>
          <span class="date">{{ post.date | date_to_string }}</span>
      </li>
      {% endif %}
    {% endif %}

  {% endfor %}
</ul>
