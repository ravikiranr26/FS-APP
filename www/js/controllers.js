angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    
      $scope.groups = [
  {
    "id": 1,
    "name": "Categories",
    "iconURL": "./img/categories-icon.png",
    "childItems": [
      {
        "childName": "What is trending ?",
          "imageURL": "img/trending.jpg",
        "grandChildren": [
          {
            "grandChildName": "Fintech, Blockchain",
            "grandChildDate": "26 February 2016",
            "author": "Sudhir Pai",
            "title": "Fintechs’ Action",
             "text": "Fintechs’ action is everywhere and both banks (e.g. Emirates NBD news today) and SI firms (e.g. Accenture) playing ‘Orchestrator’s role providing ‘platforms’ for Fintech firms to experiment their products / ideas and take it to the next level.  Should we think in similar lines and build an ecosystem of start-ups /fintech’s around us connecting with our clients? How can we expand AIE concepts to specific domain areas?<ul><li>Barclays building 43 Blockchain apps in Innovation labs</li><li>DBS providing 5000 sq. ft. of co-working space</li><li>ANZ CEO’s vision to be a disruptor, asking Fintech’s to contact directly</li></ul>"
          },
          {
            "grandChildName": "IoT, Insurance",
            "grandChildDate": "26 February 2016",
            "author": "Sudhir Pai",
            "title": "Connected Insurance",
             "text": "‘Connected Insurance’ is becoming popular embracing infinite possibilities through IoT. If we map it to our Digital /MIT framework, we can see its applicability in all three areas - customer experience (new devices, mHealth apps), Operational efficiencies (shorter claims cycles) and new products / services (“Pay as you Drive”?).  How do we position ourselves with firms like ROC-Connect providing cloud based IoT platform for Insurers?"
          },
            {
            "grandChildName": "Fintech, Competitors ",
            "grandChildDate": "26 February 2016",
            "author": "Sudhir Pai",
            "title": "Accenture and Fintech",
             "text": "Is it worth noting Accenture’s investment in Vlocity to build vertical solutions on Salesforce platform or its investments in building Fintech Innovation Centres across globe? (till date 59 start-ups, $200 worth funding raised and 29 FS institutions have participated)"
          },
            {
            "grandChildName": "Blockchain",
            "grandChildDate": "4 March 2016",
            "author": "Sudhir Pai",
            "title": "Blockchain",
             "text": "We keep hearing about this technology and very quickly Banks are seriously attempting to understand its implications. Today we hear in the news that the R3-led blockchain consortium of the world’s biggest banks has completed their second known proof of concept experiment of blockchain technology with trials spanning five different blockchain solutions. Forty of the world’s biggest banks that are partners in the private blockchain consortium led by New York-based blockchain-tech startup R3 have tested distributed ledger systems from five blockchain vendors as well as three cloud providers. Keen to add this as a priority into our plan to explore this technology further and understand specifics of POCs being attempted by our clients."
          },
            {
            "grandChildName": "Client Relationship",
            "grandChildDate": "4 March 2016",
            "author": "Sudhir Pai",
            "title": "Nina4airbnb",
             "text": "You might have heard about this a while ago, but thought of sharing it.  Resume of Nina for a job at airbnb. A best example of showing client intimacy and passion. This is how she caught CEO’s attention http://www.nina4airbnb.com/"
          },
            {
            "grandChildName": "Competitors, Digital",
            "grandChildDate": "4 March 2016",
            "author": "Sudhir Pai",
            "title": "Social Listening",
             "text": "Playing on social media analytics, if I apply same query on both Capgemini and Accenture, filtered by same keywords Digital, Cloud, Disruption and Innovation….we see the following charts. Interesting to see Accenture brand appearing smaller than Digital brand for them and its reverse for Capgemini."
          },
            {
            "grandChildName": "Ecosystems ",
            "grandChildDate": "11 March 2016",
            "author": "Sudhir Pai",
            "title": "Ecosystems",
             "text": "Ecosystems: Most commonly used term in the recent times. Undoubtedly there is a realisation that in the new world we need to build ecosystems. But how? …Few options to consider: a. Industry ecosystems – where a trend is embraced by various industry partnerships e.g. Home Energy Management ecosystems are being formed which will have energy companies, telcos, Insurance providers and SI partners. I would refer to it as ‘non-traditional FS’ partnerships  b. Solution partners ecosystem:  i.      Traditional partners with disruptive solutions e.g. IBM BlueMix ii.      Born in the cloud partner ecosystems e.g. Salesforce and AppXchange product partners  iii.      Start-ups (Fintechs)   iv.      Combination of the above  Challenge for us is to figure out how we build new ecosystems that will generate profitable business at the same time does not dilute our own value propositions. Over time we shall build (or identify) integrated solutions with these ecosystem of partners, whereby ‘collectively’ we have better offerings. Additional challenge is to look at alliance management function, it might be based on integrated solutions or a domain area than just individual product partnerships?"
          },
            {
            "grandChildName": "Bi-model IT, Agile",
            "grandChildDate": "11 March 2016",
            "author": "Sudhir Pai",
            "title": "Bi-model IT",
             "text": "Bi-model IT:  Everyone (clients) understands the concept of “two speed IT”, but most of them are struggling to make it work.  This is an area where I see a good opportunity for SI’s like us. An integral part of Digital transformation is to make end to end IT landscape work and not just the front end or new technology solution. This means we would need Bi-Model IT operating model, support model, SLAs, APIs, services architecture and delivery methods (Agile+legacy) to work.  Will further explore with the teams on what we already have in this space to build on…."
          },
            {
            "grandChildName": "Universities",
            "grandChildDate": "20 March 2016",
            "author": "Sudhir Pai",
            "title": "Role of Universities/Schools in our business",
             "text": "Role of Universities/Schools in our business:  “What can you tell us which we don’t know already”, common question we face from our clients (especially tier-1).  We look out for the moments where we can ‘wow’ them. In reality it’s becoming difficult. Given public access to information and many a times we feel clients are ahead or at least pretend to be ahead in the game.  One of the channels to explore is “Universities”. I have seen a huge shift in Universities in researching and developing some of the most advanced topics. In the past our interactions were mostly limited to hiring or a specific joint research…Is there anything more we can do, primarily from a Financial Services standpoint? A few thoughts:  a.       Sharing research topics of interests  b.      Participating in advisory boards and co-located trainings  c.       Partnerships on POCs, POVs  d.      Resource sharing and talent acquisition, through brand building. E.g. guest lectures etc.   e.      Inviting them in our key clients, advisors and internal events I would use CTO community to sign up to key advisory boards and look out for a network of Universities and research institutes to help us drive this future thinking? Another trend associated to Universities is closely working with senior schools and under grads. I would recall a presentation from high school principal and students in our lab who demonstrated some fascinating prototypes developed by students. Potential for us to learn from Gen Y on a regular basis?"
          },
            {
            "grandChildName": "Fintech",
            "grandChildDate": "20 March 2016",
            "author": "Sudhir Pai",
            "title": "Regulators",
             "text": "There is increasing pressure on our clients to ‘partner’ with regulators than seeing them as obstacles in the Fintech world and in the interest of consumers.  We should have a mechanism to understand regulations at all levels on an ongoing basis and host / facilitate forums to bring in clients and Fintechs to interact with regulators.  This might be geo specific but gives us an upper hand to have meaningful conversation on this subject in the areas of data privacy, cloud and at least understand challenges and how regulators are preparing for the future.  Particularly deep dive conversation on data security and privacy when we discuss cloud, APIs and CRM areas."
          },
            {
            "grandChildName": "AI, Natural Languages",
            "grandChildDate": "17 June 2016",
            "author": "Sudhir Pai",
            "title": "SIRI",
             "text": "Apples announced iOS10 at WWDC and as expected enhancements to ‘SIRI’ seems to be key, including opening up Siri for third party developers. General comments from the market is it lacks AI capabilities and Apple is still catching up. Looks like it’s time to have a POV on Natural Language Processing (NLP) interfaces."
          },
            {
            "grandChildName": "Disruption",
            "grandChildDate": "17 June 2016",
            "author": "Sudhir Pai",
            "title": "",
             "text": "When we talk about disruptive business models, we refer to ‘Uber’, but not to forget OLA in India and Didi in China have gained significant market share and managed to raise billions of $ in competing with Uber as local favourites."
          },
            {
            "grandChildName": "Digital, RPA, New buzz words",
            "grandChildDate": "17 June 2016",
            "author": "Sudhir Pai",
            "title": "Digital Delivery Platform",
             "text": "A week before we spoke about “Platforms” a term quite often carries different meaning for different people. It was amazing to see readiness of our own “Digital Delivery Platform”, which we have been referring as ADC’s (time to find a new name!). Ashish and team did a walkthrough of how ADC’s can provide a jump-start for digital programs with ready to use pre-built set of tools and technologies. Key differentiator is that the ADC will bring in people dimension and not just technology, so we have day-1 productivity assured. Something we should expand to existing ODCs, and at key onsite locations. Thanks Pitchai for the workshop on both RPA and ADCs."
          } 
        ]
      },
      {
        "childName": "Innovate to Disrupt",
          "imageURL": "img/idea.jpg",
        "grandChildren": [
          {
            "grandChildName": "AIE",
            "grandChildDate": "11 June 2016",
            "author": "Sudhir Pai",
            "title": "Applied Innovation Discover launch in Toronto",
             "text": "It was a great opportunity to be part of Applied Innovation Discover launch in Toronto. Thanks Sanjay, over coming days I shall share the demos with relevant teams to explore future potential. Interactions with clients and partners in Toronto helped to understand their priorities for focus areas.   We now have a nod from MaRS, a Fintech hub in Canada, taking off with a number of initiatives.   As Lanny mentioned ‘Exchange’ provides a platform for clients to get a feel from other industry solutions.  E.g. Predictive analytics solution we built for London Hydro is applicable for events run by Four Seasons and both clients were present at the occasion. RBC insurance can be part of Utilities clients ecosystem in Canada to drive Smart home initiatives."   
          },
          {
            "grandChildName": "Innovation Events",
           "grandChildDate": "4 March 2016",
            "author": "Sudhir Pai",
            "title": "RISE Innovation program - Mumbai centre",
             "text": "This week Barclays launched Mumbai centre as part of their RISE Innovation program. https://thinkrise.com/ Its a physical and digital community that provides start-ups with the connections and resources to create ground-breaking businesses. Tagline as “Connect, Co-create and Scale”, event was attended by group CIO, head of innovation, CEO of India, VC’s and top Fintechs. Capgemini was called out multiple times for connecting Barclays with Fintechs.  It was clear that the main focus for the bank in coming months is on AI. Takeaways •  Applicability of Pune Innovation centre for co-creation with Barclays. • Connecting with Fintech hubs in Mumbai for other clients and for global hubs e.g. MaRS • Looking out for similar programs with other banks. Thanks to Rosemary and team for introducing and connecting with huge community start-ups.  Looks like this trend continues with SBI India’s largest bank announcing 200 Cr for fintechs this week."       
          }
        ]
      },
      {
        "childName": "Group Catalyst",
          "imageURL": "img/groupcatalyst.jpg",
        "grandChildren": [
          {
            "grandChildName": "Catalyst",
            "grandChildCount": 8,
              "text": "There are ongoing debates on impacts of fourth industrial revolution, opportunities and challenges. The article below sets the context nicely and might be helpful when we have strategic conversations with CXOs. https://www.weforum.org/agenda/2016/01/the-fourth-industrial-revolution-what-it-means-and-how-to-respond/"
          }
        ]
      },
        {
        "childName": "External Influences",
        "imageURL": "img/external.jpg",
        "grandChildren": [
          {
            "grandChildName": "RSS Feeds",
            "grandChildCount": 8,
              "text": "There are ongoing debates on impacts of fourth industrial revolution, opportunities and challenges. The article below sets the context nicely and might be helpful when we have strategic conversations with CXOs. https://www.weforum.org/agenda/2016/01/the-fourth-industrial-revolution-what-it-means-and-how-to-respond/"
          }
        ]
      },
        {
        "childName": "CTO Community",
        "imageURL": "img/community.png",
        "grandChildren": [
          {
            "grandChildName": "Videos of the member + text description of the team",
            "grandChildCount": 8,
              "text" : "There are ongoing debates on impacts of fourth industrial revolution, opportunities and challenges. The article below sets the context nicely and might be helpful when we have strategic conversations with CXOs. https://www.weforum.org/agenda/2016/01/the-fourth-industrial-revolution-what-it-means-and-how-to-respond/"
          }
        ]
      }
    ]
  }
];
  
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
    // $ionicScrollDelegate.resize();
  }

  $scope.toggleSubGroup = function(item) {
    if ($scope.isSubGroupShown(item)) {
      $scope.shownChild = null;
    } else {
      $scope.shownChild = item;
    }
    // $ionicScrollDelegate.resize();
  }

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  }

  $scope.isSubGroupShown = function(item) {
    return $scope.shownChild === item;
  }


  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };
    

  $scope.shownGroup = true;
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
    
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SignInCtrl', function($scope, $state) {
     $scope.signIn = function(user) {
        console.log('Sign-In', user);
        $state.go('tab.dash');
      };
})

.controller('LogoutCtrl', function($scope, $state, $location) {
    $scope.settings = {
    enableFriends: true
  }; 
    $scope.toggleChange = function() {
                if ($scope.settings.enableFriends == false) {
                    $state.go('signin');
                } else
                    $scope.settings.enableFriends = true;
            
            };

})

.controller('ProfileCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('NotificationsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
