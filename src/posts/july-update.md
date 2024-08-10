---
title: Svex up your markdown
count: 25
color: cadetblue
list: [1, 2, 3, 4, "boo"]
---

## Heading

In July, WiHi, in no particular order:

1. Implemented all the user-facing features necessary for users to send us data.
In particular, users can: register; add (multiple) stations; get their API key;
send data to us through our REST-based API. 
 
WiHI has implemented a server-less based data ingestion pipeline. 
(See below on our backend platform updates.)

 A convenient feature we have implemented is the ability for users to 
 drag and drop their station information.

 With this, we are able to begin reaching out to
 community members interested in contributing data to WiHi. 

2. Moved WiHi's entire backend to a serverless architecture. 
 This significantly improves the reliability and scalability
 of the WiHi platform. Our reliability is limited by
 AWS outages. Scalability comes for free in serverless architectures. 

 More importantly, WiHi has done this entirely as Infrastructure-as-Code.
 That is, the provisioning of the backend assets is done completely as code
 using Terraform. Making changes to our backend infrastructure now consists
 of coding (most of the time it will be copy and paste code) and letting
 Terraform execute changes.

3. Began the process of implementing the ML pipeline for anomaly detection / QC.
 In particular, WiHi has begun developing operational capability in the 
 GDN model.

4. Added 218 stations from the German DWD network. These stations will 
 contribute greatly to WiHi's anomaly detection and QC ML efforts. 

5. Entered into discussions with a West African entity for their data! 
 We’re currently in the midst of the process of signing a data-sharing agreement. 

6. Drafted a campaign to acquire users, and more importantly their historical data,
 in a crypto-native manner.
