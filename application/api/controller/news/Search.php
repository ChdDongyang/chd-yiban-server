<?php

namespace app\api\controller\news;

use app\common\controller\Api;
use think\Config;
use fast\Http;


/**
 * 资讯详情控制器
 */
class Search extends Api
{
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];

    const CHSSUGGEST_URL = "http://202.117.64.236:8081/news/chssuggest";
    const QUERY_URL = "http://202.117.64.236:8081/news/query";
    /**
     * 返回拼写建议结果
     */
    public function chssuggest(){
        $key = $this->request->post('key');
        $params = [
            'coreName' => 'News_Index',
            'key' => $key,
        ];
        $info = Http::get($this::CHSSUGGEST_URL,$params);
        return $info;
    }
    /**
     * 
     */
    public function query(){
        $words = $this->request->post('words');
        $from = $this->request->post('from');
        $to = $this->request->post('to');
        $params = [
            'words' => $words,
            'from'  => $from,
            'to'    => $to,
        ];
        $info = Http::get($this::QUERY_URL,$params);
        return $info;
    }

    
}