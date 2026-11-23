---
title: 'Mechanism Design: Reverse Engineering Human Systems'
date: '2024-07-23'
tags: ['Mathematics', 'Social', 'Economics']
draft: false
summary:
  'Explore how Mechanism Design allows us to reverse engineer and optimize complex human systems,
  from fair resource allocation to matching problems, revolutionizing our approach to societal
  challenges and decision-making processes'
---

How do you prevent monopoly pricing? How can policies be created to shape behavior? How do you
optimally match a set of people? How do you fairly divide a cake? These are broad and non-trivial
questions, loaded with considerable assumptions and constraints. Figuring out any one of them is a
massive undertaking, let alone trying to find a solution that can address all of them.

In 2007, Leonid Hurwicz, Eric Maskin, and Roger Myerson won the Nobel Prize in Economics. They saw
an underlying link between these problems and their work laid down the foundations for a theoretical
framework that can solve them. It is called **Mechanism Design Theory**.

The idea of mechanism design is to start by identifying your end goals and then working backwards to
design a **mechanism** that achieves those goals. For each of the problems stated earlier, we know
what the optimal end goal is, but the mechanism to achieve that end goal is unknown. It is helpful
to think of mechanism design as "reverse game theory." Usually, in game theory and optimization, you
are given a system or "game" and you try to study the outcomes to find or predict an optimal result.
This outcome-finding approach is what most people default to when trying to resolve these problems.
Mechanism design flips that process. As simple as it sounds, this gives you a surprisingly effective
framework to solve these problems.

## Cake Splitting: Why Game Theory Doesn't Cut It

Assume you are a parent and you want to split a cake fairly between two kids. What is the best way
to go about it? A classic problem, and if you had siblings growing up, you probably know the answer:
you let one person cut the cake into two pieces, and the other person chooses which piece they want.
This is the mechanism design solution. While most people are familiar with this solution, they
haven't thought deeply about why it is the most optimal. A game theoretic approach would analyze all
possible ways to cut the cake and try to find the optimal split that satisfies both people. A
reasonable split could be splitting the cake perfectly in half. So why doesn't splitting the cake
perfectly in half work?

First, let's define what it means to fairly cut a cake. The common components that define fairness
in mechanism design are:

- **Proportionality**: When you get a piece of cake, you value it at least as much as the other
  pieces. So if there are two pieces of cake, and you get one piece, that piece holds as much value
  (or more) than the other slice.
- **Envy Freeness**: Swapping your piece with another piece does not increase the value you get. In
  simple terms, you want to keep your piece because no other piece gives you more value.

With those definitions in mind, if you cut the cake in a proportional and envy-free way, then you
achieve fairness. Now the big issue here is that everyone has a personal view of what fairness is.
Your view of what half a cake is might not be the same as someone else's. You might also prefer
different parts of the cake. The point is, everyone has their own personal preferences, and this
certainly factors into finding the optimal solution. That is why the perfect half-split solution
doesn't work; everyone has a different measure of what a perfect half is. If you're trying to find
the optimal cake split without knowing each person's preferences, it's impossible. Game theory
requires you to be extremely specific about the constraints of the problem and represent those
constraints mathematically. In the real world, it is quite hard to determine what each person's
preference is, let alone represent that as a mathematical statement.

When solving problems that involve humans, you have to factor in that human behavior will impact the
solution. The problem is that human behavior is unpredictable, and often people will not reveal
their true preferences. Therefore, trying to solve such problems with a framework that requires
knowing all information and representing it mathematically will never work in the real world. That
is one of the best parts about mechanism design: it allows you to find optimal solutions without
needing to know exactly how each involved party will behave. That is very powerful.

Why does the mechanism design solution work here? We start from the optimal solution and work
backwards. We know what the properties of a fair cake split look like from the definition of
fairness provided earlier. Now, we work backward to find a mechanism that leads us to this solution.
By allowing one person to split it, it is in their best interest to split it in such a way that they
see both pieces as equal. Allowing the other person to choose gives them the opportunity to pick the
piece they think is best for themselves. Mechanism design provides a process where each person can
always end up with a fair division of the cake, regardless of their cake preference.

There are a few excellent properties that emerge from this:

- **The solution to a mechanism design problem often unlocks the solution to a whole class of
  similar problems**. The fair cake-splitting is, at it's core, a resource-splitting problem between
  people. The solution mechanism design gives us can be used to solve any problem of the same
  nature. This is in contrast to game theory, where every time the problem statement changes, the
  constraints change because people's behaviors depend on the given problem. For example, people
  might have different personal preferences in splitting a cake versus a sandwich. In this case,
  game theory would require us to treat each as a totally different problem. Mechanism design allows
  us to find an identical process to resolve both, as the process is independent of people's
  personal preferences or behaviors. So, if you want to split any resource with someone, the
  mechanism design way is your best bet.
- **Mechanism design is meant to optimize for all participants**. One might argue that the optimal
  solution in this scenario is that they get the whole cake. It is important to denote that
  mechanism design is intended to create processes that optimize for everyone involved. When the
  cake splitting process happens, the end result is that all parties have received a fair piece. The
  best solution is the one that optimizes for you and everyone else around you.

So, the solution for splitting a cake between two people is quite simple. What about three people or
more? I encourage you to try it and come up with a mechanism for that. There is a solution, and you
can find it online, but it's a fun exercise. Follow me for more parenting tips.

## Incentives: Solving the Human Algorithm

An integral part of finding robust mechanisms lies in the understanding of **human motivation**. It
is imperative that the participants in any mechanism are **incentivized** to behave in a way that
aligns with the outcome that the mechanism intends to achieve. With our cake cutting example, the
optimal outcome is that the cake is distributed fairly. The first person is incentivized to make the
fairest split, otherwise, they might end up with a piece that has less value when the second person
chooses. We call that incentive-compatibility: when the optimal strategy for any participant is to
act based on their true preference. Incentive compatibility ensures a win-win scenario, where the
participants' optimal strategy and true end goal happens to be the same strategy required to achieve
the intended outcome of the mechanism.

Startups are a great example of how incentive alignment plays a huge role in the success of your
mechanism. What is the end goal? In most (if not all) cases, that is becoming profitable, and
realizing its value by either having an exit (be bought out) or going public with a high stock
valuation. The huge task for the startup then is to work backwards to come up with a mechanism for
employees to contribute to achieving that goal, and more importantly, for the employees to be
incentivized to do so. As a startup founder, your first instinct might be to offer high salaries to
attract top talent. However, this approach is not only costly but also limited in its effectiveness.
While competitive salaries can motivate employees to perform their assigned tasks, they don't
necessarily inspire a deep commitment to the company's growth. This is where equity comes into play.

Offering employees a stake in the company through equity is a powerful incentive mechanism. It
aligns the interests of employees with those of the company, creating a symbiotic relationship where
personal success is directly tied to the company's success. As the startup grows and increases in
value, so does the employees' equity, motivating them to go above and beyond their basic
responsibilities. This creates a win-win scenario: employees are invested in their own future while
simultaneously contributing to the company's growth. However, equity alone isn't foolproof. An
employee might attempt to game the system by joining a startup, acquiring equity, and then quitting
– potentially reaping the benefits if the company succeeds without contributing to that success. To
counter this, startups implement vesting schedules. These schedules gradually unlock an employee's
equity over time, incentivizing long-term commitment and ensuring that those who benefit most are
those who contribute consistently to the company's growth. This mechanism effectively balances the
company's need for dedicated talent with the fair distribution of potential rewards.

In essence, the startup compensation mechanism combines small base salary with equity that gets
unlocked over time. This creates a powerful incentive-compatible mechanism that aligns employee
interests with company goals, encourages long-term commitment, and distributes potential rewards
fairly. It exemplifies how thoughtful mechanism design can create a system that benefits both the
company and its employees, driving innovation and growth in the startup ecosystem.

In contrast to startups, government jobs and large corporations often have very different
mechanisms. These entities typically offer stable salaries, comprehensive benefits, and the promise
of long-term job security rather than equity or performance-based incentives. While this can attract
risk-averse individuals seeking stability, it also incentivizes complacency and bureaucratic
behavior. The lack of direct stake in the organization's success can lead to a "clock-in, clock-out"
mentality, where employees are motivated more by job preservation than by driving innovation or
efficiency. This stark difference in incentive mechanisms partly explains why startups are often at
the forefront of innovation, while government agencies and large corporations are frequently
characterized by slower pace, resistance to change, and bureaucratic inefficiencies.

Try to take a moment and ask yourself how your job incentivizes you to perform and how that impacts
your behavior. We like to think that we're always internally motivated to do our best work anywhere,
but that is simply not true.

## The Perfect Match: Designed not destined

In the grand theater of life, we often romanticize the idea of destiny - that perfect match made in
heaven, that dream job that was 'meant to be', or that 'once-in-a-lifetime' opportunity. Well, to a
lot of people's dismay, it turns out that matching is a problem much better left in the hands of
math rather than fate. We don't leave perfect matches to chance, but we design systems to create
them.

Matching problems exist in a lot of places, often operating behind the scenes in ways we rarely
notice. From swiping right on dating apps to applying for college, from job placements to organ
donor lists, these problems shape crucial aspects of our lives. You have certainly participated in a
matching problem before. At their core, matching problems involve finding optimal pairings between
two groups with different preferences.

To truly understand the complexity and impact of matching problems, let's dive into one of the most
widespread and consequential examples: the school assignment process. This system affects millions
of students each year. Getting it right is so important because it shapes their educational paths
and, by extension, their futures. It's a perfect illustration of how a well-designed matching
mechanism can make a real difference in people's lives early on. As usual, we start by defining what
the desired outcome is. We want to achieve what is called a "stable match" between students and
schools. A 'stable match' in this context means an assignment where no student and school would both
prefer to be matched with each other over their current assignments. In other words, there's no pair
of a student and a school who would both be happier if the student switched to that school.

In most places, school districts have used a ranking system that works as follows:

- Students submit a ranked list of their preferred schools.
- Schools have a set of criteria for student selection (e.g., test scores, proximity).
- Each school reviews the students who ranked it as their top choice.
- Schools select students based on their criteria until they reach capacity.
- Unmatched students are then considered for their second-choice schools, and so on.

This system has a critical flaw: it is not incentive-compatible. Families often feel compelled to
misrepresent their true preferences, avoiding highly competitive schools as their top choice even if
it's their genuine preference. This behavior stems from the system's structure and the limited
capacity of desirable schools.

Here's the dilemma families face: If they list a highly competitive school as their top choice and
don't get in, they've lost their chance at their 'first pick' advantage for their second-choice
school. By the time the system considers them for their second choice, that school's capacity might
already be filled by students who listed it as their top choice. This domino effect continues down
their list, potentially leaving them with only less desirable options. Consequently, many families
opt for a strategic approach. They might list a less preferred but more attainable school as their
top choice to increase their chances of getting in somewhere acceptable. This decision is driven by
risk aversion - the fear of ending up in a low-ranked school outweighs the potential benefit of
aiming for the most desired school.

Moreover, this system particularly advantages privileged families. Those with more resources can
invest time in researching schools, understanding the intricacies of the selection process, and even
preparing their children for competitive entrance requirements. They might have access to
consultants or inside information about which schools are likely to have spots available. This
creates an uneven playing field, where a family's socioeconomic status can significantly influence
their child's educational opportunities.

The pressure to outsmart the system creates significant stress for all families and leads to an
inefficient allocation of time and resources. Students end up in schools that don't best fit their
needs and preferences. It also creates a system where the true demand for top schools is masked, as
many families don't even attempt to apply to them. It undermines the very purpose of having a
preference-based assignment system, turning what should be a straightforward process into a complex
strategic game.

In 2003, Alvin Roth, a world-renowned economist was tasked with improving the high school assignment
system for New York which about 90,000 students apply to every year. Roth along with his colleagues
Atila Abdulkadiroğlu, and Parag Pathak saw the potential of mechanism design in solving that
problem. Roth would go on to win a Nobel Prize in 2012 for his contributions to economics,
specifically market design. Roth and his colleagues saw that the deferred-acceptance algorithm,
initially developed by David Gale and Lloyd Shapley, would fit to solve the student matching problem
for schools.

The deferred-acceptance algorithm works by iteratively matching students to schools based on their
preferences and the schools' priorities. Here's a simplified version of how the process works:

- **Students and Schools Submit Preferences**: Students rank their preferred schools, and schools
  rank students based on various criteria (such as proximity, academic performance, etc.).
- **Initial Proposals**: Each student applies to their top-choice school.
- **Tentative Matches**: Schools tentatively accept students based on their priorities but keep the
  spots open for potentially better matches in subsequent rounds.
- **Iterative Proposals**: Students who are not tentatively matched apply to their next preferred
  school. Schools then reconsider their tentative matches, possibly replacing a lower-priority
  student with a higher-priority one from the new applicants.
- **Final Matches**: This process continues until no more changes occur, resulting in a stable set
  of matches where no student and school would prefer to be matched with each other over their
  current match.

This approach does end up creating a stable match between students and schools, while removing the
incentive for strategic behavior from both sides as well. Here's why it works: For students, the
algorithm allows them to start with their true top choice without risking their chances at other
schools. If they aren't accepted at their first choice, they still have a fair shot at their second,
third, and subsequent choices. This eliminates the need for families to 'game' the system by listing
more attainable schools first. From the schools' perspective, the "tentative acceptance" is the
subtle, but crucial step. It allows schools to equally consider all applicants, regardless of where
the school ranks in each student's preference list. A school can initially accept a student, but
then replace that student with a more preferred candidate in a later round if one becomes available.
This means that schools don't have to worry about committing too early to less preferred students
and can make optimal decisions based on their full applicant pool. This two-sided consideration
ensures that the resulting matches are stable. By the end of the process, there's no student-school
pair that would prefer each other over their current assignments.

In 2003 the New York Board accepted this algorithm as their new school assignment system. In the
application, students were allowed to rank 12 schools. In the first year of the implementation, here
are the results:

- 22% increase in students that matched to a school they chose.
- 7% increase in students who got their top choice.
- 10x decrease in amount of students who matched with a school they did not rank.

These results continued to improve year after year even though no changes were made. In 2005,
Boston's School board ended up implementing the same algorithm and saw similar improvements.

As noted earlier, one of the powers of mechanism design is that once you find a mechanism for a
problem, you can use it for a whole class of similar problems. The deferred acceptance algorithm is
widely used in a lot of critical matching scenarios, including medical residency matching, organ
donation, and multiple job markets.

If you have ever had to strategically rank preferences, you were a victim of a poorly designed
ranking mechanism. I've been personally affected by this when I applied to university. I had to rank
my top 3 choices and I listed my top rankings based on the universities that lined up most with my
scholarship opportunities so that I could guarantee that I would end up somewhere. I did end up
getting into the university I ranked as my top choice, but it wasn't the one I wanted to actually go
to the most. I didn't get accepted into the the specific program I wanted to attend the most, and at
the time I kept wondering had I changed my ranking, would I have gotten in?

## Murphy's Mechanism: What Can Go Wrong Will Go Wrong

One might think after reading this: What stops someone from taking the whole cake by force? Don't
most startups fail? Isn't school matching riddled with bias, favoritism, corruption, and systemic
racism? These are all valid questions, so let's address them.

For a designed mechanism to function effectively in the real world, it must be enforced correctly
and consistently. But who's in charge of this enforcement? Humans. Well, if there's one thing
history has taught us, it's that human fallibility can throw even the most brilliantly designed
mechanisms into disarray. From well-intentioned mistakes to deliberate sabotage, our track record of
implementing theoretical perfection is... less than perfect.

Corruption and poor enforcement are the usual suspects that cripple most mechanisms. When those
tasked with implementation prioritize personal gain or simply fail to do their jobs effectively, the
entire system turns to shambles. Take environmental protection, for instance. A carbon pricing
mechanism, elegant on paper, can fail spectacularly if corrupt officials accept bribes to
underreport emissions or if there's simply not enough manpower to monitor compliance. Similarly, in
the realm of taxation, mechanisms designed to ensure fair contribution and wealth redistribution can
be undermined. We see this in the perpetual cycle of tax cuts for high-income brackets, ostensibly
to stimulate economic growth, but often resulting in widening wealth gaps. Simultaneously,
governments frequently fail to deliver the public services that taxes are meant to fund. Citizens
find themselves paying into a system that promises education, healthcare, and infrastructure, only
to encounter underfunded schools, inaccessible medical care, and crumbling roads. This breakdown
isn't just about lost revenue, but it's a fundamental breach of the social contract that taxation
represents. Even in our school matching example, the matching mechanism can be undermined if corrupt
administrators manipulate inputs or if there's inadequate oversight to ensure schools adhere to the
assigned matches. In each case, it's not the mechanism itself that fails, but the all-too-human
systems meant to bring it to life.

Of all the challenges facing mechanism design, human irrationality might be the one forever
unsolvable, a perpetual wrench in the gears of the most elegant systems. Mechanism design often
assumes that participants will act in their own best interests, making rational decisions based on
available information. However, reality stubbornly deviates from this assumption every now and then.
Cognitive biases, emotional decisions, and limited information can lead individuals to make choices
that seem illogical or counterproductive. Lots of people still don't wear seatbelts, people still
buy lottery tickets, some people even put the milk before the cereal, and the list goes on. However,
in a frustrating but almost necessary paradoxical manner, this very irrationality has been arguably
a wellspring of progress for humanity. After all, many of humanity's greatest leaps, from scientific
discoveries that seemed implausible to entrepreneurial ventures that defied market logic have sprung
from decisions that, on paper, seemed utterly irrational.

Even with these downsides considered, this doesn't render mechanism design useless. There is a
distinction between finding a solution to a problem and implementing that solution. Mechanism design
enabled us to find solutions to problems that we otherwise couldn't solve before, which by itself is
remarkable progress. Even in actual implementation, there are tons of mechanism design based
solutions that are out there right now which do have a net positive impact on the world in some
capacity. One could also argue that the recent leaps in consensus mechanisms and decentralized
systems could offer proper solutions that address the human fallibility in implementing mechanisms
(that is a topic for a whole new post). Not irrationality though, and I am honestly rooting for that
one to always remain.

## Final Thoughts

I hope this offered an interesting introduction to such a fascinating intersection of economics,
math, and social science that is Mechanism design theory. I purposefully tried to omit writing any
maths (which was really hard) to make it digestible for a larger audience. I would also like to
point out that I am not an economist, or a social scientist, and barely a mathematician, so I very
well could have errors in my writing. If you found some, have some thoughts, or want to say hello,
you can find me [here](https://x.com/ameanasad). I have a list of resources I used to write this
article which you can find [here](https://app.mycommon.place/list/11).

Thanks to Kelsey Eakin, and Liam Hough for helping with editing.
