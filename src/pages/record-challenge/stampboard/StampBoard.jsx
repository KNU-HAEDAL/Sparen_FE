import * as Styles from './styles';
import Stamp from '../components/Stamp';
import BottomSheet from '../bottomsheet/BottomSheet';
import useBottomSheet from '@/hooks/useBottomSheet';
import { useState,useEffect } from "react";
import { getChallengeRecord, getChallengeRecordDetail  } from '../../../apis/record-challenge/record.challenge.api';


const StampBoard = () => {
    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
    const [data, setData] = useState(null);
    const [items, setItems] = useState([]);
    const [record, setRecord] = useState([]);


    const setArray = (length, values) => {
        const array = new Array(length).fill(-1);
        for (let i = 0; i < values.length; i++) {
          array[i] = values[i];
        }
        setItems(array);
    };


    const chunkItems = (arr, chunkSize) => {
        const chunks = [];
        const last = arr.length % chunkSize == 1 ? chunkSize+1 : 0;
        for (let i = 0; i < arr.length-last; i += chunkSize) 
          chunks.push(arr.slice(i, i + chunkSize));
        
        for (let i = arr.length-last; i<arr.length; i += (chunkSize-1))
            chunks.push(arr.slice(i, i + (chunkSize-1)));
        return chunks;
    };
    
    const rows = chunkItems(items, 3);

    const toggleBottomSheet = (idx) => {
        console.log(isBottomSheetOpen);
        console.log(idx);
        if (idx===-1){
            setBottomSheetOpen(false);
            console.log("ddd");
        }
        else {
            getChallengeRecordDetail(idx).then((res) => {
                setRecord(res);
                setBottomSheetOpen(true);
            });
        }
    }

    const handleDragEnd = (event, info) => {
        if (info.offset.y > 100) {
            setBottomSheetOpen(false);
        }
    };

    useEffect(() => {
        getChallengeRecord(18).then((res) => {
          setData(res);
          setArray(res.totalCount, res.recordIds);
    })}, []);
    

    return (
        <>
        {data ? 
        <Styles.Wrapper>
            <Styles.Title>{data.title}</Styles.Title>
            <Styles.StampWrapper>
                <Styles.Text>챌린지 인증하고 레벨업!<br/>짠돌이가 응원해요</Styles.Text>
                <Styles.SubText>챌린지 유효기간  {data.startDate} ~ {data.endDate}</Styles.SubText>
                {rows.map((row, rowIndex) => (
                    <Styles.Row key={rowIndex}>
                        {row.map((item, index) => (
                            <Styles.Item key={index} rowLength={row.length} onClick={() => {toggleBottomSheet(item)}}>
                                <Stamp data = {item} />
                            </Styles.Item>    
                        ))}
                    </Styles.Row>
                ))}
            </Styles.StampWrapper>
        </Styles.Wrapper>
        : <div/>}

        <Styles.CautionWrapper>
            <Styles.SubText>유의사항</Styles.SubText>
            <Styles.SmallText>
                별도의 규칙이 없는 한 스탬프는 하루 한개로 제한됩니다. (동일 챌린지에 하루 여러건 참여한 것은 인정되지 않습니다.)<br/>
                모든 스탬프를 찍은 후 챌린지가 완료되며, 일부만 수행한 경우 챌린지가 완료로 표시되지 않습니다.<br/>
                명시된 횟수를 초과한 경우 챌린지 완료로 인정되나 추가 인증에 대한 포인트는 제공되지 않습니다.<br/>
                사진 조작, 타인의 계정 이용등의 부정행위가 적발될 시 해당 계정은 자동 탈퇴되며 추후 서비스 이용에 제한이 있을 수 있습니다.<br/>
                스탬프가 정상 인증되지 않는경우 고객센터로 문의하세요<br/></Styles.SmallText>
        </Styles.CautionWrapper>

        <BottomSheet data={record} isOpen={isBottomSheetOpen} onDragEnd={handleDragEnd}/>
        </>
    );
}

export default StampBoard;