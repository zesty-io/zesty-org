---
description: >-
  In this guide we will review how to create a button to download a calendar
  event connected to an event.
---

# Using ICS to create a Calendar Downloadd

### Overview

You can view an example of this working of this functionality at the [Zesty Burger Demo](http://burger-demo.zesty.site/events/).

### Create the endpoint

Create an endpoint with any relevant name and a `.ics` extension. In this example we used `event.ics`.

### Write the ICS file

Below is an example ICS syntax wrapped with a parsley each loop, and replacing dynamic pieces of content with parsley calls to relevant fields:

```text
{{ each event_list as event where event._item_zuid = '{get_var.id}' limit 1}}
BEGIN:VCALENDAR
VERSION:2.0
PRODID:{{ event.getUrl() }}
CALSCALE:GREGORIAN
(** Timezone start **)
BEGIN:VTIMEZONE
TZID:America/Los_Angeles
BEGIN:DAYLIGHT
TZOFFSETFROM:-0800
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
DTSTART:20070311T020000
TZNAME:PDT
TZOFFSETTO:-0700
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0700
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
DTSTART:20071104T020000
TZNAME:PST
TZOFFSETTO:-0800
END:STANDARD
END:VTIMEZONE
(** Timezone end **)
(** Event start **)
BEGIN:VEVENT
TRANSP:OPAQUE
DTSTART;TZID=America/Los_Angeles:{{ event.date.date(Ymd) }}T{{ event.date.date(his) }}
DTEND;TZID=America/Los_Angeles:{{ event.date.date(Ymd) }}T{{ math({event.date.date(h)+1}) }}{{ event.date.date(is) }}
UID:{{ event.zuid }}
DTSTAMP:{{ site.date(Ymd) }}T{{ site.date(his) }}
LOCATION: ZestyBurger
DESCRIPTION: {{event.calendar_description.striptags(start,end) }}
URL;VALUE=URI:https://{{ site.domain }}{{ event.getUrl() }}
SUMMARY: {{event.name}}
DESCRIPTION: {{event.description}}
CREATED:{{ site.date(Ymd) }}T{{ site.date(his) }}
END:VEVENT
(** Event End **)
END:VCALENDAR
{{ end-each }}
```

Note that the query in the each loop is looking for a query parameter names `id` to get the correct event.

### Add the Markup

Here is the HTML and parsley we are using on the event page to generate the button where we are referencing the end point we created and adding in the event id as a query parameter.

```text
{{each event_list as event sort by event.date}}
 <div class="card">
         .....
    <a href="/-/custom/event.ics?id={{event._item_zuid}}" class="btn btn-primary">Add to Calendar</a>
    ....
</div>
{{end-each}}
```

