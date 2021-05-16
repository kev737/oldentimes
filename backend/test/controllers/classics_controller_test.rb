require 'test_helper'

class ClassicsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @classic = classics(:one)
  end

  test "should get index" do
    get classics_url, as: :json
    assert_response :success
  end

  test "should create classic" do
    assert_difference('Classic.count') do
      post classics_url, params: { classic: { definition: @classic.definition, phrase: @classic.phrase } }, as: :json
    end

    assert_response 201
  end

  test "should show classic" do
    get classic_url(@classic), as: :json
    assert_response :success
  end

  test "should update classic" do
    patch classic_url(@classic), params: { classic: { definition: @classic.definition, phrase: @classic.phrase } }, as: :json
    assert_response 200
  end

  test "should destroy classic" do
    assert_difference('Classic.count', -1) do
      delete classic_url(@classic), as: :json
    end

    assert_response 204
  end
end
