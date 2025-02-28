import './App.scss'

import {useMatches} from "./hooks/useMatches.ts";
import MatchItem from "./components/MatchItem/MatchItem.tsx";
import Button from "./components/Button/Button.tsx";
import MatchLoading from "./components/MatchLoading/MatchLoading.tsx";

function App() {
    const {matches, isError, isLoading, fetchData} = useMatches();

    return (
        <div className="container">
            <div className="page__header">
                <svg width="258" height="23">
                    <use xlinkHref="#logo"/>git branch -M main
                </svg>
                <div className="page__header_row">
                    {isError && <div className="page__header_error">
                        <svg width={28} height={28}>
                            <use xlinkHref="#warning"/>
                        </svg>
                        <span>Ошибка: не удалось загрузить информацию</span>
                    </div>}
                    <Button className="refresh__button" disabled={isLoading} onClick={() => fetchData()}>
                        Обновить
                        <svg width={26} height={26}>
                            <use xlinkHref="#refresh"/>
                        </svg>
                    </Button>
                </div>
            </div>
            <div className="match__list">
                {isLoading ?
                    <MatchLoading/> :
                    matches.map((match, index) => (<MatchItem key={match.title + index} match={match}/>))
                }
            </div>
        </div>
    )
}

export default App;
