exports.seed = function (knex, Promise) {
  return knex('candidates').del()
    .then(function () {
      return knex('candidates').insert([
        {
          name: "Mike Johnston",
          office: "governer",
          party: "democrat",
          src: "https://www.mikejohnstonforcolorado.com/",
          img: "https://www.mikejohnstonforcolorado.com/static/aedf4497ab8fd6c0b46386a6a864979b-72357c896c2e80575e7796735d40658b-6f312.jpg",
          p1: "Citizens eligible for two years of debt-free tuition",
          p2: "All children and pregnant women are covered, colorado health care program, fight for more health care cost transparency.",
          p3: "Ban high-cap magazines, universal background checks, ban bump stocks, Gun Violence Restraining Orders",
          immigration: true,
          gunControl: true,
          parisAccords: true
        }, {
          name: "Cary Kennedy",
          office: "governer",
          party: "democrat",
          src: "https://carykennedyforgovernor.com/",
          img: "https://carykennedyforgovernor.com/wp-content/themes/ck/photos/ck-square-one-tile.jpg",
          p1: "Raise teacher pay and increase amount of scholarships for students in the education pipe-line. universal access to preschool and full-day kindergarten, more programs for better student mental / emotional health.",
          p2: "Ban military style assault weapons, keep guns out of dangerous people, fight the NRA and the gun lobby.",
          p3: "Colorado universal health care coverage, wants to improve access to women's health services, including abortion and contraception",
          immigration: true,
          gunControl: true,
          parisAccords: true
        }, {
          name: "Donna Lynne",
          office: "governer",
          party: "democrat",
          src: "http://lynneforcolorado.com/",
          img: "https://www.colorado.gov/pacific/sites/default/files/Donna%20Lynne-WEB2.jpg",
          p1: "",
          p2: "",
          p3: "",
          immigration: true,
          gunControl: true,
          parisAccords: true
        }, {
          name: "Jarid Polis",
          office: "governer",
          party: "democrat",
          src: "https://polisforcolorado.com/",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Jared_Polis_Official_2012.jpg/220px-Jared_Polis_Official_2012.jpg",
          p1: "Free Full-Day Preschool and Kindergarten , Raising Teacher Pay, Colorado-wide school renovation, increase teacher's voices in political decisions",
          p2: "Ban military style assault weapons, keep guns out of dangerous people.",
          p3: "Single payer health care, paid family and medical leave, Confronting the opioid crisis and the suicide epidemic.",
          immigration: true,
          gunControl: true,
          parisAccords: true
        }, {
          name: "Greg Lopez",
          office: "governer",
          party: "republican",
          src: "https://www.lopezforgovernor.com/",
          img: "https://static1.squarespace.com/static/593ec57f414fb5f67d830fe5/t/5953f810ff7c5021d74ad789/1498675278943/?format=500w",
          p1: "Against sanctuary cities, wants more legal immigration, and less benefits for immigrants who have entered the country illegally",
          p2: "Structure the fundamentals of k-12 education, provide more pipelines for trade schools, improve teacher wage",
          p3: "Pro 2nd amendment, pro open-carry for military personnel and police",
          immigration: false,
          gunControl: false,
          parisAccords: false
        }, {
          name: "Victor Mitchell",
          office: "governer",
          party: "republican",
          src: "http://www.vic4gov.com/",
          img: "https://i2.wp.com/www.denverpost.com/wp-content/uploads/2017/06/victor-mitchell-04132017-jl-02x.jpg?w=620&crop=0%2C0px%2C100%2C9999px&ssl=1",
          p1: "More transparency on where Marijuana tax money goes, providing more education on health effects of marijuana use.",
          p2: "Lower STEM higher-education costs, increase vocational training in high schools, lower college costs.",
          p3: "Wide-spread quality care using preventative-care and clinic-based health care for affordable health care.",
          immigration: false,
          gunControl: false,
          parisAccords: false
        }, {
          name: "Doug Robinson",
          office: "governer",
          party: "republican",
          src: "https://www.dougforcolorado.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/professional_color_cropped.jpg",
          p1: "More individualized education paths for kids including charter-school access and STEM pathways.",
          p2: "Wants to repeal the high-cap magazine ban, centering focus on keeping guns out of the mentally ill and criminals.",
          p3: "Wants to stop healthcare skyrocketing to bring more accessible health care for families and individuals, pro-life,",
          immigration: false,
          gunControl: false,
          parisAccords: false
        }, {
          name: "Walker Stapleton",
          office: "governer",
          party: "republican",
          src: "https://www.stapletonforcolorado.com/",
          img: "https://www.coloradopols.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-10-at-12.36.32-PM.png",
          p1: "Anti sanctuary cities",
          p2: "Wants to expand school choice to provide high-quality education with more charter school options",
          p3: "Second-amendment defender, wants to arm teachers",
          immigration: false,
          gunControl: false,
          parisAccords: false
        },
        {
          name: "Joe Salazar",
          office: "attorney general",
          party: "democrat",
          src: "https://salazarforcoag.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Joseph_Salazar.jpg",
          p1: "Rep. Salazar has pledged to 'bring bills to go after the oil and gas companies' and to 'support those who bring bills to go after the oil and gas companies, ' because if he did not, 'that would relegate me to the depths of hell.'",
          p2: "'I will protect our undocumented families as well as our citizen families here in the state of Colorado from being terrorized by the Trump administration.If that means that I have to sue local governments as well as the state government that are trying to assist in federal immigration enforcement, I will do that.'",
          p3: "Has vowed to uphold and enforce Colorado's 2013 gun control lawsexpanding background checks and banning high-capacity magazines. He is supportive of a so-called 'red flag law, ' a ban on bump stocks and a ban on assault weapons.",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Phil Weiser",
          office: "attorney general",
          party: "Democrat",
          src: "https://www.philforcolorado.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Phil_Weiser_headshot.png",
          p1: "Says he supports and would support sanctuary cities. 'They need to know they aren't going to be deported when they show up in court,' he said of immigrants. '... The question here is what can an attorney general do? And the answer is defend the constitutional rights of cities to (be sanctuary cities).'",
          p2: "Has vowed to uphold and enforce Colorado's 2013 gun control laws expanding background checks and banning high-capacity magazines. He is supportive of a so-called 'red flag law, ' a ban on bump stocks and a ban on assault weapons.",
          p3: "Says he would like to see TABOR reformed through a vote of the people. 'I will work to change the law because TABOR is a straight jacket in our state and it's going to kill us if we don't change it.But I can't do it through litigation. I've got to do it by going back to the people to change the Constitution.'",
          immigration: true,
          gunControl: true,
          parisAccords: true
        }, {
          name: "George Brauchler",
          office: "attorney general",
          party: "republican",
          src: "https://www.george2018.com/",
          img: "https://www.law.du.edu/sites/default/files/faculty-staff/George%20%20Brauchler/full-body/george-brauchler-fullbody.jpg",
          p1: "Wants to create a Human Trafficking Unit, Domestic Violence Unit, Expanding our Special Victims Unit to include adult Sex Assault (rape), Elder Abuse Unit,  Cold Case Unit , Establishing a Drug/Narcotics Unit to aggressively tackle the illegal marijuana black market and growing opioid epidemic. Vigorously enforcing all of our laws, including pursuing the death penalty in appropriate cases, such as mass murderers.",
          p2: "Repeal Obamacare; local control of Medicaid, Medicaid block grants instead of ObamaCare expansion, Increase Medicaid co-pays to change behavior, Charge co-pays to low-income residents on Medicaid.",
          p3: "Believes Colorado joining Paris Accords is meaningless symbolism",
          immigration: false,
          gunControl: false,
          parisAccords: false
        },
        {
          name: "Jena Griswold",
          office: "secretary of state",
          party: "democrat",
          src: "https://www.jenaforcolorado.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Jena_Griswold.jpg",
          p1: "Promises to stand up to the Trump administration's defend coloradans' right to voter privacy ",
          p2: "Wants to make a law that mandates presidential candidates to release their tax returns to get on the Colorado ballot. ",
          p3: "Wants to make the Secretary of state's office a resource center for new business and entrepreneurs.",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Wayne Williams",
          office: "secretary of state",
          party: "republican",
          src: "https://winwithwayne.org/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Wayne_Williams.jpg",
          p1: "Has fought against bills that enabled fake votes and voter fraud.",
          p2: "Bipartisan approach to voter politics",
          p3: "For transparency in government spending and budgeting",
          immigration: false,
          gunControl: false,
          parisAccords: false
        },
        {
          name: "Diana DeGette",
          office: "Senate District 1",
          party: "Democrat",
          src: "https://degette.house.gov/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Diana_Degette.jpg",
          p1: "Pro more school funding",
          p2: "Pro gun control",
          p3: "Pro healthcare and paris accords",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Saira Rao",
          office: "Senate District 1",
          party: "Democrat",
          src: "https://sairaforcongress.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Screen_Shot_2018-05-23_at_2.41.46_PM.png",
          p1: "For protecting immigrants and standing up to xenophobia",
          p2: "For reformed drug policies, decriminalize marijuana",
          p3: "For protecting public education and eliminating student loan debt",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Casper Stockham",
          office: "Senate District 1",
          party: "Republican",
          src: "https://www.casperforcolorado.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Casper_Stockham.jpg",
          p1: "Believes it should be easier to achieve legal immigration",
          p2: "Everyone should be able to send their children to their choice of school",
          p3: "Health insurance should be cheaper for all",
          immigration: false,
          gunControl: false,
          parisAccords: true
        },
        {
          name: "Joe Neguse",
          office: "Senate District 2",
          party: "Democrat",
          src: "https://www.joeneguseforcongress.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Joe_Neguse.png",
          p1: "Fighting for immigration reform and a clean Dream Act,",
          p2: "Opposing efforts to repeal the Affordable Care Act, fighting for the Expanded & Improved Medicare-For-All Act,",
          p3: "Fighting for the right to breathe clean air and drink clean water",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Mark Williams",
          office: "Senate District 2",
          party: "Democrat",
          src: "https://www.markforcolorado.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Markwilliamsprofile.jpg",
          p1: "Believes we should be moving on from the war on drugs ",
          p2: "For gun control",
          p3: "Everyone should have access to healthcare",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Peter Yu",
          office: "Senate District 2",
          party: "Republican",
          src: "https://www.peteryuforcongress.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Peter_Yu.jpg",
          p1: "America should be energy independent, cheaper energy all around government has no say in climate change, its in the peoples hands",
          p2: "Affordable care act has failed our nation, nation should steer clear from socialized healthcare",
          p3: "",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Roger Barris",
          office: "Senate District 2",
          party: "Libertarian",
          src: "https://ballotpedia.org/Roger_Barris",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Roger_Barris_Head_Shot.jpg",
          p1: "Author of 'Economic Man'",
          p2: "",
          p3: "",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Nick Thomas",
          office: "Senate District 2",
          party: "Independent",
          src: "https://www.nickthomasforcongress.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/BARTLETTcreativeLLC_SOE_ProjectX-ITE_FlighttoDenver_headShots_039.jpg",
          p1: "Country over party, improve the system to better represent the country as a whole.",
          p2: "Committed to helping with climate change and supports clean, renewable energy",
          p3: "Emphasizes balancing the budget and reducing national debt",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Diane Mitsch Bush",
          office: "Senate District 3",
          party: "Democrat",
          src: "http://www.dianeforcolorado.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Diane_Mitsch_Bush.jpg",
          p1: "balance budget and increase education funding",
          p2: "increase affordable housing",
          p3: "bring high-speed internet to rural areas",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Karl Hanlon",
          office: "Senate District 3",
          party: "Democrat",
          src: "https://karlhanlon.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Karl_Hanlon.jpg",
          p1: "committed to solutions to the opioid epidemic",
          p2: "solving the gun crisis by addressing issues in mental health and closing loopholes.",
          p3: "renewable energy to rural communities for energy solutions",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Arn Menconi",
          office: "Senate District 3",
          party: "Democrat",
          src: "http://arnmenconi.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Arn_Menconi.png",
          p1: "end wars and denuclearize America ",
          p2: "increase minimum wage to 15 / hour",
          p3: "Ban fracking, solar first",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Scott Tipton",
          office: "Senate District 3",
          party: "Republican",
          src: "https://tipton.house.gov/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Scott_Tipton.JPG",
          p1: "Lighten tax load on entrepreneurs and job creators",
          p2: "Wants to cut spending and lower national debt",
          p3: "Wants social security reform",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Chase Kohne",
          office: "Senate District 4",
          party: "democrat",
          src: "http://www.chasekohneforcongress.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Chase_Kohne.jpg",
          p1: "Promises to promote clean and renewable energy in congress ",
          p2: "Is a farmer by trade and a small business owner, is committed to fighting for these groups ",
          p3: "Wants  universal healthcare",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Karen McCormick",
          office: "Senate District 4",
          party: "democrat",
          src: "http://www.mccormickforcongress.org/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Karen_McCormick_.jpg",
          p1: "Believes congress should take action on student debt relief ",
          p2: "Against Trump's zero-tolerance immigration policy",
          p3: "Pro clean energy",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Ken Buck",
          office: "Senate District 4",
          party: "republican",
          src: "http://www.buckforcolorado.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Ken_Buck_official_congressional_photo.jpg",
          p1: "Wants more accountability in congress",
          p2: "Wants to cut national spending and debt",
          p3: "Wants VA reform to offer better vet services",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Stephany Rose Spaulding",
          office: "Senate District 5",
          party: "democrat",
          src: "http://www.stephanyroseforcongress.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/stephany-rose-spaulding.jpg",
          p1: "Americans deserve excellence, equity and access in education.",
          p2: "Health care for all, affordable, its not a privilege",
          p3: "immediate response needed for climate change, no full-time worker should be in poverty",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Doug Lamborn",
          office: "Senate District 5",
          party: "republican",
          src: "http://www.lambornforcongress.org/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Doug_Lamborn.jpg",
          p1: "Impeach IRS Commissioner Koskinen",
          p2: "Fix the illegal immigration problem",
          p3: "committed to protecting the constitution ",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Darryl Glenn",
          office: "Senate District 5",
          party: "republican",
          src: "https://www.darrylglennforcongress.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Darryl_Glenn.jpg",
          p1: "National Defense – Supporting a strong well trained and equipped military, Health Care Reform – Voting to repeal and replace disastrous Obamacare",
          p2: "Criminal Justice – Increasing safety, providing a more effective reentry system, Drug Addiction – Ending the cycle of addiction and crime through intervention",
          p3: "Homelessness – Saving lives and tax dollars with treatment and work, Affordable Housing – Reducing red tape, building homes faster for less money ",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Owen Hill",
          office: "Senate District 5",
          party: "republican",
          src: "http://www.owenhill.org/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Owen_Hill.jpg",
          p1: "Volunteer board member of Life Network",
          p2: "Agrees with President Trump on immigration",
          p3: "Endorsed by the NRA",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Bill Rhea",
          office: "Senate District 5",
          party: "republican",
          src: "https://ballotpedia.org/Bill_Rhea",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Bill_Rhea.jpg",
          p1: "The current national debt is unsustainable, and we are betraying Republican values",
          p2: "For setting limits on the 2nd amendment",
          p3: "Black Lives Matter, in support of gay marriage",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Tyler Stevens",
          office: "Senate District 5",
          party: "republican",
          src: "https://ballotpedia.org/Tyler_Stevens",
          img: "https://media2.fdncms.com/csindy/imager/u/original/3712971/tylerstevens.jpg",
          p1: "Fiscal Responsibility, Personal Responsibility, Local Government",
          p2: "Private Property Rights, Public Lands Recreation",
          p3: "Small Business Advocate, Gun Owner and Pro-2nd Amendment, Pro-Life",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Jason Crow",
          office: "Senate District 6",
          party: "democrat",
          src: "http://jasoncrowforcongress.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Jason_Crow.jpg",
          p1: "For gun control by restricting high ammunition guns and implementing stricter background checks",
          p2: "Re-commit to the Paris Climate Accord. Implement the Clean Power Plan , Young people should have access to high quality education, regardless of where they live or their ability to pay",
          p3: "Americans deserve healthcare, he wants to fix the Affordable Care Act",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Levi Tillemann",
          office: "Senate District 6",
          party: "democrat",
          src: "https://www.leviforcolorado.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Levi_Tillemann.jpg",
          p1: "For strict gun control, and a political environment not bought by the NRA",
          p2: "For more sensible taxes on the different classes",
          p3: "100% renewable energy by 2035",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Mike Coffman",
          office: "Senate District 6",
          party: "republican",
          src: "http://coffmanforcongress.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Mike_Coffman.jpg",
          p1: "For small businesses, for the 2nd amendment",
          p2: "Immigration is about securing borders",
          p3: "America must end reliance on non-american energy and oil",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Dan Chapin",
          office: "Senate District 6",
          party: "unaffiliated",
          src: "https://ballotpedia.org/Dan_Chapin",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Dan_Chapin.jpg",
          p1: "For gun control, all Americans could receive basic medical care anywhere in the Country at an affordable cost",
          p2: "Create Alternative Energy Research and Development Fund.",
          p3: "The minimum wage should be raised to $15 an hour",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Ed Perlmutter",
          office: "Senate District 7",
          party: "democrat",
          src: "https://perlmutterforcolorado.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Ed_Perlmutter.jpg",
          p1: "Wants to get humans on mars by 2033",
          p2: "Is supportive of the affordable care act, wants to increase Pell grants for students in higher education",
          p3: "Wants to open new VA hospital in Aurora",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Mark Barrington",
          office: "Senate District 7",
          party: "republican",
          src: "https://barringtonforcolorado.com/",
          img: "http://www.mastersonphoto.com/businessphotographer/images/businessphotography-05.jpg",
          p1: "Determined to fight the partisan gridlock",
          p2: "Budget minded",
          p3: "Wants tax cuts",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Nathan Clay",
          office: "Senate District 7",
          party: "independent",
          src: "http://www.nathanclayforcongress.com/",
          img: "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Nathan_Clay.png",
          p1: "",
          p2: "",
          p3: "",
          immigration: true,
          gunControl: true,
          parisAccords: true
        },
        {
          name: "Marcus France",
          office: "Senate District 7",
          party: "unaffiliated",
          src: "https://ballotpedia.org/Marcus_France",
          img: "https://coloradopolitics.com/wp-content/uploads/2017/12/Bidlack.jpg",
          p1: "",
          p2: "",
          p3: "",
          immigration: true,
          gunControl: true,
          parisAccords: true
        }
      ])
    })
};
