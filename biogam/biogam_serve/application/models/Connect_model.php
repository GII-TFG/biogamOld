<?php  

  class Connect_model extends CI_Model{

  	public function GetAll(){

  		$q = $this->db->get('tema');
  		return $q->result();
  	}
  	
  }
