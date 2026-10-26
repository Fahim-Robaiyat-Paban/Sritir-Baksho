import QuizFlow from "@/components/quiz/QuizFlow";

export const metadata = {
  title: "শৈশব কুইজ: তুমি কেমন ছিলে?",
  description: "পাঁচটা মজার প্রশ্নের উত্তর দিয়ে জেনে নাও ছোটবেলায় তুমি কেমন ছিলে। লুকোচুরির চ্যাম্পিয়ন, নাকি পাড়ার ক্রিকেট কিং?",
  alternates: { canonical: "/quiz" },
};

const QuizPage = () => {
  return (
    <div className="site-container px-5 pt-4 sm:px-8 xl:px-0">
      <h1 className="sr-only">শৈশব কুইজ</h1>
      <QuizFlow />
    </div>
  );
};

export default QuizPage;
