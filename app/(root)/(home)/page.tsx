import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

export default async function Home() {
  const questions = [
    {
      _id: "1",
      title: "Cascading in CSS",
      questionToTags: [
        { questionId: "1", tagId: "1", tag: { id: "1", name: "sql" } },
        { questionId: "1", tagId: "2", tag: { id: "2", name: "paython" } },
      ],
      author: { id: "1", name: "Ahmed Bahnasy", avatar: "ahmed_avatar.jpg" },
      upvotes: 10,
      views: 100,
      answers: 5,
      createdAt: new Date("2024-01-23T12:00:00.000Z"),
    },
    {
      _id: "2",
      title: "Introduction to JavaScript",
      questionToTags: [
        { questionId: "2", tagId: "3", tag: { id: "3", name: "javascript" } },
        { questionId: "2", tagId: "4", tag: { id: "4", name: "html" } },
      ],
      author: { id: "2", name: "John Doe", avatar: "john_avatar.jpg" },
      upvotes: 15,
      views: 120,
      answers: 8,
      createdAt: new Date("2024-01-23T12:15:00.000Z"),
    },
    // Continue adding objects for the rest of the questions...
    // ...
    {
      _id: "10",
      title: "API Integration in React Applications",
      questionToTags: [
        { questionId: "10", tagId: "19", tag: { id: "19", name: "api" } },
        { questionId: "10", tagId: "20", tag: { id: "20", name: "react" } },
      ],
      author: { id: "10", name: "David Miller", avatar: "david_avatar.jpg" },
      upvotes: 17,
      views: 155,
      answers: 10,
      createdAt: new Date("2024-01-23T14:15:00.000Z"),
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search Questions"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses={"min-h-[56px] sm:min-w-[170px]"}
          containerClasses={"hidden max-md:flex"}
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              answers={question.answers}
              author={question.author}
              createdAt={question.createdAt}
              questionToTags={question.questionToTags}
              title={question.title}
              upvotes={question.upvotes}
              views={question.views}
              _id={question._id}
            />
          ))
        ) : (
          <NoResult
            title="There is no questions to show"
            description="Be the first to break the silence.. Ask a Question and kick start the discussion. Our query could be the next big thing to learn from. Get involved! "
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
