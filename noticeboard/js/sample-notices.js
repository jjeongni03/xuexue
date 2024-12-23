const notices = [
    {
        id: 1,
        pinned: true,
        title: '퀴즈게임에 나온 한자가 궁금해요!',
        content: '<p>퀴즈게임에 나온 망고 한자가 궁금해요! </p>',
        date: '2024-05-05 19:40:32',
        author: '정은',
        likes: 6,
        dislikes: 1,
        comments: [
            {
                author: '쩡쌤',
                date: '2023-04-25 09:01:02',
                comment: '망고는 한자로 芒果 라고 해요!'
            },
            {
                author: '은쌤',
                date: '2023-04-25 09:02:03',
                comment: '추가로 말하자면 한어병음은 mángguǒ 라고 써요! 망고 랑 발음이 비슷하죠?'
            }
        ],
        images: [
            {
                title: "Sample Image One",
                src: "https://placehold.jp/30/d81b60/ffffff/600x300.png?text=Sample+Image+One"
            }
        ]
    },
    {
        id: 2,
        pinned: true,
        title: '단어 카드에 나온 한자 따라 쓰기는 언제 나오나요?',
        content: '<p>단어 카드에 나온 글자를 채팅창에 입력하면 중국어 발음 나오는게 잇었으면 좋을것 같아요! </p>',
        date: '2024-04-26 10:17:20',
        author: '은서',
        likes: 1,
        dislikes: 2,
        comments: [
            {
                author: '쩡쌤',
                date: '2024-04-26 09:03:04',
                comment: '지금 준비중이에요! 조그만 기달려주세요~'
            }
        ]
    },
    {
        id: 3,
        pinned: false,
        title: '회화3에 나온 중국어 문장중에 궁금한점 있어요!',
        content: '<p>"你们 好!" 나와 있는데 你们 무슨 뜻인가요?</p>',
        date: '2024-04-26 09:14:21',
        author: '은영',
        likes: 4,
        dislikes: 0,
        comments: [
            {
                author: '은쌤',
                date: '2024-04-26 10:00:04',
                comment: '你们은 회화1에서 배웠던 너, 당신 이라는 뜻에 你 와 ~들이라는们 이라는, 글자가 합쳐져서 여러명이라는 뜻을 나타내요! '
            }

        ]
    },
    {
        id: 4,
        pinned: false,
        title: '중국어 채팅창이 말을 안해요!',
        content: '<p>채팅창이 잘 실행 되고 있었는데 말을 안해요ㅠㅠ</p>',
        date: '2024-04-27 10:14:21',
        author: '은권',
        likes: 7,
        dislikes: 1,
        comments: []
    },
    {
        id: 5,
        pinned: false,
        title: '중국어 단어 퀴즈에 대해 문의 합니다.',
        content: '<p>중국어 단어 퀴즈중 투어팡 투어팡은 어떻게 넘어가나요?</p>',
        date: '2024-04-28 17:01:12',
        author: '린',
        likes: 3,
        dislikes: 2,
        comments: [
            {
                author: '쩡쌤',
                date: '2024-04-28 09:03:04',
                comment: '아래 창에 다음(신체)라고 적혀있어요! 누르면 다음 창으로 이동해요, 조금만 기달려주시면 게임내에서 가능하도록 업데이트 할게요!'
            }
        ]
    },
    {
        id: 6,
        pinned: false,
        title: '성조 부분에 대해서 알려주세요!',
        content: '<p>성조는 1-4성 있는게 맞나요??</p>',
        date: '2024-04-29 17:03:14',
        author: '은',
        likes: 1,
        dislikes: 0,
        comments: []
    }
]
