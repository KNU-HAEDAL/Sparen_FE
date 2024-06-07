import React, { useState } from 'react';
import TopBar from '../../../components/top-bar/top-Bar';
import * as Styles from './styles';
import { PiStarFill, PiStarLight } from "react-icons/pi";
import { postReview } from '../../../apis/review/review.challenge.api';
import { useNavigate } from "react-router-dom";


const WritingReview = () => {
    const Item1 = ["어려워요", "적당해요","쉬워요"];
    const Item2 = ["뿌듯해요", "유익해요","애매해요"];
    const navigate = useNavigate();
    
    const [rating, setRating] = useState(0);
    const [selectedItem1, setSelectedItem1] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);
    const [text, setText] = useState('');

    const handleItem1Click = (item) => {
        setSelectedItem1(item);
    };
    const handleItem2Click = (item) => {
        setSelectedItem2(item);
    };

    const saveHandler = () =>{
        postReview(9, text, rating).then((res)=>{
            console.log("응답: ",res);
            alert("성공적으로 저장했습니다.");
            navigate("/"); 
        }).catch(()=>{
            alert("저장에 실패했습니다.");
            navigate("/"); 
        });
    }

    

    return (
        <Styles.Wrapper>
            <TopBar title={"챌린지 리뷰"}/>
            <Styles.Title>길에 떨어진 쓰레기 줍기 챌린지</Styles.Title>
            <Styles.StarWrapper>
            {[...Array(rating)].map((a,i) => (
                <PiStarFill size='35' key={i} onClick={() => setRating(i + 1)}  color='var(--color-green-01)'/>
            ))}
            {[...Array(5 - rating)].map((a,i) => (
                <PiStarLight size='35' key={i} onClick={() => setRating(rating + i + 1)} color='var(--color-green-01)'/>
            ))}
            <Styles.Star>{rating}.0</Styles.Star><Styles.SubText>/5.0</Styles.SubText>
            </Styles.StarWrapper>
            <Styles.RowWrapper>
                <Styles.BoldText>난이도</Styles.BoldText>
                {Item1.map((item) => (
                <Styles.CheckBtn
                    key={item}
                    onClick={() => handleItem1Click(item)}
                    isSelected={selectedItem1 === item}> {item}
                </Styles.CheckBtn>))}
            </Styles.RowWrapper>
            <Styles.RowWrapper>
                <Styles.BoldText>성취감</Styles.BoldText>
                {Item2.map((item) => (
                <Styles.CheckBtn
                    key={item}
                    onClick={() => handleItem2Click(item)}
                    isSelected={selectedItem2 === item}> {item}
                </Styles.CheckBtn>))}
            </Styles.RowWrapper>
            <Styles.Margin />
            <Styles.BoldText>리뷰 쓰기</Styles.BoldText>
            <Styles.InputArea 
                type="text" 
                placeholder="챌린지 후 느낀점을 적어주세요"
                value={text}
                onChange={(e)=>setText(e.target.value)} >
            </Styles.InputArea>
            <Styles.Btn onClick={saveHandler}>등록하기</Styles.Btn>
        </Styles.Wrapper>
    );
}


export default WritingReview;