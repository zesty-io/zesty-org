# Publishing and Scheduling

## Publishing Specification & Documentation for Zesty.io Content Items

Publishing tables tell Zesty.io content items when to display specific versions, or when to stop resolving.

All dates are posted with time in UTC. Relative locality must be calculated by the interface that displays the data.

### There are two type of schedule publish entries

**An Indefinite publish**

Goes online past the takeOnline date, and never expires. It always available through the Instant Content JSON API or Zesty.io Web Engine once the takeOnline date becomes the past.

| VersionZUID | takeOnline | takeOffline |
| :--- | :---: | :---: |
| 9-5xx-xxx | 11/09/18 05:00 | NULL |

**Example Payload to be online forever**

```text
{
    itemZuid: '7-XXX-XXXX',
    versionZuid: '9-XXX-XXXX',
    takeOnline: 11/05/18 05:00
}
```

_takeOffline is omitted_

**A Limited Publish Entry**

Goes online past the takeOnline date, and expires past the take offline. It is not available through the Instant Content JSON API or Zesty.io Web Engine out side of the dates.

| VersionZUID | takeOnline | takeOffline |
| :--- | :---: | :---: |
| 9-4xx-xxx | 11/05/18 05:00 | 11/08/18 05:00 |

**Example Payload to be online for 72 hours**

```text
{
    itemZuid: 7-XXX-XXXX,
    versionZuid: 9-XXX-XXXX,
    takeOnline: 11/05/18 05:00,
    takeOffline: 11/08/18 05:00
}
```

**A Take Offline Publish Entry**

Goes online past the takeOnline date, and expires past the take offline. It is not available through the Instant Content JSON API or Zesty.io Web Engine out side of the dates.

| VersionZUID | takeOnline | takeOffline |
| :--- | :---: | :---: |
| 9-4xx-xxx | 11/05/18 05:00 | 11/08/18 05:00 |

**Example Payload to be online for 72 hours**

```text
{
    itemZuid: 7-XXX-XXXX,
    versionZuid: 9-XXX-XXXX,
    takeOnline: 11/05/18 05:00,
    takeOffline: 11/08/18 05:00
}
```

### A Publishing Table is created for each content item

Tables can be set to teeter content, this can be used for promotions, holiday messaging, announcements, or A/B testing.

**Sample table for teetered content:**

| VersionZUID | takeOnline | takeOffline |
| :--- | :---: | :---: |
| 9-5xx-xxx | 11/09/18 05:00 | NULL |
| 9-4xx-xxx | 11/05/18 05:00 | 11/09/18 05:00 |
| 9-3xx-xxx | 10/10/18 05:00 | 11/05/18 05:00 |
| 9-1xx-xxx | 10/02/18 05:00 | 10/10/18 05:00 |
| 9-2xx-xxx | 09/10/18 05:00 | 10/02/18 05:00 |
| 9-1xx-xxx | 09/01/18 05:00 | 09/10/18 05:00 |

Publishing tables are complicated because existing data on the table may reject specific submissions. We will go through this scenarios.

### Normal Accepted Scenarios

**Scenario 1: \[First Publish Now\]** Payload has a present timestamp, with no intersecting. An entry is made with the current timestamp for takeOnline and takeOffline is null.

| VersionZUID | takeOnline | takeOffline |
| :--- | :---: | :---: |
| 9-5xx-xxx | 11/09/18 | NULL |

**Scenario 2: \[Future Publish\]** Payload has a future date; there is a previous publish indefinite publish entry

| VersionZUID | takeOnline | takeOffline |
| :--- | :---: | :---: |
| 9-6xx-xxx | 11/09/18 | NULL |
| 9-5xx-xxx | 11/09/18 | NULL |

### Abnormal Mixed Acceptance Scenarios

Scenario 1: Date Intersects/Overlaps existing dates \[REJECT\]

Scenario 2: Dates to take online and offline match \[REJECT\]

Scenario 3: Date is in the past for either take online or offline \[REJECT\]

Scenario 4: Take online date is after Take off offline date \[REJECT\]

Scenario 5: Take offline future date is set, but not take online \[VARIES\] Case 1 \[ACCEPT\]: If the a NULL entry exists for takeOffline, update that null entry Case 2 \[REJECT\]: If entries all have takeOffline set, reject Case 3 \[REJECT\]: If the NULL takeOffline exists, but the date submitted is before the takeOnline of that entry, reject.

Scenario 6: \[Wedge\] Only takeOnline date submitted, no takeOffline, with other records set to go online a head of it \[ACCEPT\] Case 1: TakeOnline is set to 10/02/18, and there is a record to go online for 10/10/18, new record entered with takeOnline as 10/02/18 and a takeOffline that matches the existing records takeOnline

