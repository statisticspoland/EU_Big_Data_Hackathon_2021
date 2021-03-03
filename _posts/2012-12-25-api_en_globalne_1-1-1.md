---
title: 'Download global indicator'
type: 'GET'
name: '/api/v1/global/1/{num}.json'
lang: 'en'
---

This method allows users to download data and metadata for chosen global indicator in English.

### Parameters



<p style='float:left;margin-top: 7px;'>Response content type</p>
<select style='float:left;padding: 0px 15px;width: 155px;margin-left: 10px;text-align-last: center;'>
  <option>application/json</option>
</select>

<div id='example2'>

<h3 id="przykładowy-curl">Curl example</h3>

<p><code class="highlighter-rouge">curl -H "Accept:application/vnd.github.v3.raw" "https://api.github.com/repos/statisticspoland/EU_Big_Data_Hackathon_2021/contents/api/v1/global/1/3-1-2.json"</code></p>

<h3 id="przykładowy-url">URL example</h3>

<p><code class="highlighter-rouge">https://api.github.com/repos/statisticspoland/EU_Big_Data_Hackathon_2021/contents/api/v1/global/1/3-1-2.json</code></p>

<h3 id="przykładowy-kod-odpowiedzi">Response code</h3>

<p><code class="highlighter-rouge">200</code></p>

<h3 id="przykładowa-odpowiedź">Response</h3>

<p><code class="highlighter-rouge" id="show-data-1-1-1-en">
</code></p>

</div>


<script>

$.getJSON('http://127.0.0.1:4000/api/v1/globalne/1/10-1-1.json', function(data) {
    $('#show-data-1-1-1-en').html(JSON.stringify(data, null, 2));
});

</script>
